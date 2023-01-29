import {Material} from "./material"

export interface ValeMateriales{
id: number;
supervisor: string;
operario: string;
obra: string;
fecha: string;
observaciones: string;
materiales: Material[]
}
