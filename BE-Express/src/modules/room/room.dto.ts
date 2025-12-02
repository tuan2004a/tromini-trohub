import { RoomStatus } from "./room.type";

export interface CreateDto {
    _id: string,
    type: string,
    name: string,
    status?: RoomStatus,
    price: number,
    area?: number,
    images?: string[],
    description: string,
    representativeId: string,
    members?: string[],
    contractId?: string | null,
}