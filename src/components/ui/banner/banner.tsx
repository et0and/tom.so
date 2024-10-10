import React from "react";
import classNames from "classnames";
import { AlertCircle } from "lucide-react";

export interface BannerProps {
  title: string;
  message: string;
  variant: "info" | "maintenance" | "error";
  showIcon?: boolean;
  linkName?: string;
  linkUrl?: string;
}

const variantStyles = {
  info: "bg-white text-black border-gray-200 dark:bg-stone-700 dark:text-white",
  maintenance: "bg-white text-black border-gray-200",
  error:
    "bg-black text-white border-black dark:bg-black dark:text-white dark:border-white",
};

export const Banner = ({
  title,
  message,
  variant,
  showIcon = true,
  linkName,
  linkUrl,
}: BannerProps) => {
  const outer = "leading-none relative my-4 w-full rounded-lg border px-4 py-4";
  const inner = "max-w-3xl w-full m-auto";

  const getIcon = () => {
    switch (variant) {
      case "info":
        return <AlertCircle size={20} />;
      case "maintenance":
      case "error":
        return <AlertCircle size={20} color="red" />;
      default:
        return null;
    }
  };

  return (
    <div
      role="region"
      aria-labelledby="tom-hackshaw-banner"
      className={classNames(outer, variantStyles[variant])}
    >
      <div className={classNames(inner, "flex mb-2")}>
        {showIcon && <span className="mr-2">{getIcon()}</span>}
        <h1 className="font-medium text-[16px]">{title}</h1>
      </div>
      <div className="leading-5">{message}</div>
      {linkName && linkUrl && (
        <a
          href={linkUrl}
          className="inline-flex no-underline p-4 mt-4 text-white transition rounded-full bg-blue-700 hover:bg-blue-900 hover:text-white hover:cursor-pointer"
        >
          {linkName}
        </a>
      )}
    </div>
  );
};
