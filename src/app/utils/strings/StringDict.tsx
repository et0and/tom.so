import React from "react";
import { PhrasesDictionary } from "./Phrases";
import { Template } from "./Template";

/**
 * A dictionary class for managing and caching text strings
 * @template T Extends PhrasesDictionary to define the structure of phrases
 */
export class StringsDict<T extends PhrasesDictionary> {
  /** Collection of phrases stored in the dictionary */
  public phrases: T;
  /** Cache map to store processed strings for performance optimization */
  private readonly memo = new Map<string, string>();

  /**
   * Creates a new StringsDict instance with the provided phrases
   * @template Phrases Type extending PhrasesDictionary
   * @param {Phrases} phrases Collection of text strings to be managed
   * @returns {StringsDict<Phrases>} New instance of StringsDict
   */
  public static from<Phrases extends PhrasesDictionary>(phrases: Phrases) {
    return new StringsDict<Phrases>(phrases);
  }

  public t<K extends keyof T>(key: K, params?: Record<string, string>): string {
    const lookupKey = this.memoKey(key, params);
    const cached = this.memo.get(lookupKey);

    if (cached) {
      return cached;
    }

    const template = this.phrases[key];
    if (!template) {
      console.error(`No string exists in dictionary for ${key as string}`);
      return "";
    }

    const result = Template(template, params);
    this.memo.set(lookupKey, result);
    return result;
  }

  public Component: React.ComponentType<{
    t: keyof T;
    params?: Record<string, string>;
  }> = this.AsComponent.bind(this);

  private AsComponent<K extends keyof T>(props: {
    t: K;
    params?: Record<string, string>;
  }) {
    return <>{this.t(props.t, props.params)}</>;
  }

  private constructor(phrases: T) {
    this.phrases = { ...phrases } as const;
  }

  private memoKey<K extends keyof T>(key: K, params?: Record<string, string>) {
    return `${key as string}:${params ? JSON.stringify(params) : ""}`;
  }
}
