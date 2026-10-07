import type { IUser } from "@/shared/model/types/user";

export type TAuthResponse = { user_data: IUser; access_token: string };
