export const Template = (
  template: string,
  params: Record<string, string> = {},
) =>
  template.replace(/\{\{(\w+)\}\}/g, (_, key) => params[key] || `{{${key}}}`);
