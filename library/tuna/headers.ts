import process from "../../.env";

const tunaHeaders = {
    'x-tuna-account': process.env.TUNA_ACCOUNT,
    'x-tuna-apptoken': process.env.TUNA_APP_TOKEN,
    'content-type': 'application/json; charset=UTF-8',
};

export default tunaHeaders;