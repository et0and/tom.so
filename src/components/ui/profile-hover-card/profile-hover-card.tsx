import { CalendarDays } from "lucide-react";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar/avatar";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/card/hover-card";

interface ProfileHoverCardProps {
  readonly href: string;
  readonly linkTitle: string;
  readonly avatarSrc: string;
  readonly avatarFallback: string;
  readonly title: string;
  readonly description: string;
  readonly joinedDate: string;
  readonly className?: string;
}

export function ProfileHoverCard({
  href,
  linkTitle,
  avatarSrc,
  avatarFallback,
  title,
  description,
  joinedDate,
  className = "link",
}: ProfileHoverCardProps) {
  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <a href={href} className={className}>
          {linkTitle}
        </a>
      </HoverCardTrigger>
      <HoverCardContent className="w-80">
        <div className="flex justify-between space-x-4">
          <Avatar>
            <AvatarImage src={avatarSrc} />
            <AvatarFallback>{avatarFallback}</AvatarFallback>
          </Avatar>
          <div className="space-y-1">
            <p className="text-sm font-semibold">{title}</p>
            <p className="text-sm">{description}</p>
            <div className="flex items-center pt-2">
              <CalendarDays className="mr-2 h-4 w-4 opacity-70" />{" "}
              <span className="text-sm text-muted-foreground">
                {joinedDate}
              </span>
            </div>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  );
}
