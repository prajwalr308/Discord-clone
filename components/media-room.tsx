"use client";

interface MediaRoomProps {
  chatId: string;
  video: boolean;
  audio: boolean;
}

export const MediaRoom = ({ chatId, video, audio }: MediaRoomProps) => {
  return (
    <div className="flex flex-col flex-1 justify-center items-center">
      <p className="text-zinc-500 dark:text-zinc-400 text-sm">
        Video/Audio calling will be available when LiveKit is configured
      </p>
    </div>
  );
};
