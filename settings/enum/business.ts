// --------------------------------------------------------------------------------------------------
enum ConsultationColor {
    Artemisia = CalendarApp.EventColor.GREEN as number,
    BeijaFlor = CalendarApp.EventColor.BLUE as number,
    Girassol = CalendarApp.EventColor.RED as number,
    DIU = CalendarApp.EventColor.GRAY as number
}
// --------------------------------------------------------------------------------------------------
enum ConsultationLocation {
    Florianopolis = 'Florianópolis',
    Brasilia = 'Brasília'
}
// --------------------------------------------------------------------------------------------------
enum ConsultationType {
    Online = 'Online',
    Presencial = 'Presencial'
}
// --------------------------------------------------------------------------------------------------
enum ConsultationModality {
    Artemisia = 'Artemísia',
    BeijaFlor = 'Beija-flor',
    Girassol = 'Girassol',
    Diu = 'DIU'
}
// --------------------------------------------------------------------------------------------------
enum ConsultationStatus {
    Pending = 'Pendente',
    Done  = 'Realizada',
    Canceled = 'Cancelada'
}
// --------------------------------------------------------------------------------------------------
enum PaymentContract {
    release2021 = 'Valores 2021',
    update2021 = 'Atualização 2021',
    release2022 = 'Valores 2022'
}
// --------------------------------------------------------------------------------------------------
export {
    ConsultationColor,
    ConsultationLocation,
    ConsultationType,
    ConsultationModality,
    ConsultationStatus,
    PaymentContract,
};
// --------------------------------------------------------------------------------------------------