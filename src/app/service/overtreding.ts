export class Overtreding {
    constructor(
        public id: number,
        public datum_vaststelling_jaar, number,
        public datum_vaststelling_maand: number,
        public datum_vaststelling: string,
        public opnameplaats_straat: string,
        public opnameplaats_rijrichting_gaand: string,
        public opnameplaats_zone_snelheid: number,
        public aantal_passanten: number,
        public aantal_overtredingen_snelheid: number,
        public aantal_overtredingen_roodlicht: number) {

    }
}