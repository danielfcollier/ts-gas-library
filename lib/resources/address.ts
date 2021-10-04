// import process from "../../.env";
// import FetchApp from "../fetch";

// REACT_APP_CEP = "https://viacep.com.br/ws/"

// export const getAddressByCep = async (cep: string) => {
//     return await FetchApp.get(`${process.env.REACT_APP_CEP}${cep}/json/unicode/`)
//       .then(({ data, erro }: any) => {
//         if ((data && data.erro) || erro) {
//           throw new Error(data.erro || erro);
//         }
  
//         const address: Address = {
//           street: data.logradouro || undefined,
//           neighborhood: data.bairro || undefined,
//           complement: data.complemento || undefined,
//           city: data.localidade || undefined,
//           state: data.uf || undefined
//         };
//         return address;
//       })
//       .catch(() => {
//         Notification.error('Não foi possível buscar o endereço. Por favor, verifique o CEP.');
//         return {};
//       });
//   };