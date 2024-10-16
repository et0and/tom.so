interface ArenaProps {
  channelSlug: string;
}

export default function ArenaWrapper({ channelSlug }: ArenaProps) {
  return (
    <iframe
      className="bg-slate-300"
      style={{ border: "1px solid #e5e5e5" }}
      width="100%"
      height="590"
      src={`https://www.are.na/tom/${channelSlug}/embed`}
      title={`Are.na channel ${channelSlug}`}
    />
  );
}
