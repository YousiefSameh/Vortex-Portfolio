export type ImageType = {
  url: string;
  public_id?: string;
} | File;

export type TLoading = "idle" | "pending" | "succeeded" | "failed";