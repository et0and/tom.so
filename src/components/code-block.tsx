import { codeToHtml } from "shiki";

interface CodeBlockProps {
  children?: string;
  code?: string;
  language?: string;
}

export async function CodeBlock({
  children,
  code,
  language = "javascript",
}: CodeBlockProps) {
  const codeContent = code || children || "";

  if (!codeContent.trim()) {
    return null;
  }

  try {
    const html = await codeToHtml(codeContent, {
      lang: language,
      theme: "github-dark",
    });

    return (
      <div className="my-6 w-full max-w-full overflow-x-auto rounded-lg [&_pre]:!p-4 [&_pre]:!m-0 [&_pre]:!bg-[#0d1117] [&_pre]:!rounded-lg [&_pre]:!w-full [&_pre]:!max-w-full">
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </div>
    );
  } catch (error) {
    // Fallback to unstyled code block if highlighting fails
    return (
      <pre className="overflow-x-auto p-4 bg-gray-800 text-gray-100 rounded-lg my-6">
        <code>{codeContent}</code>
      </pre>
    );
  }
}
