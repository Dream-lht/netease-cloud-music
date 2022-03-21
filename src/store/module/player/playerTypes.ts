export interface IPlayerType {
  songInfo: unknown[];
  songAudioInfo: unknown[];
  play: () => void;
}

export interface playPayload {
  type: string;
  id: string | number;
}
