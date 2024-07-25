import { message } from 'antd';

export const success = () => {
  message.success('Verificaçao efectuda com sucesso. Serás direcioando para a pagina  login');
};

export const erro = () => {
  message.error('Ocorreu um erro ao criar a conta!');
};


export const warnings = () => {
  message.warning("Sorry, you can't access this Private Repository ☹️");
};

export const campos = () => {
    message.warning('Verifique o campo email e tente novamente');
  };

  export const pass = () => {
    message.warning('A senha deve ter pelo menos 6 caracteres');
  };
  export const erro404 = ()=>{
    message.warning('Nenhum dado encontrado para o e-mail fornecido contactar administração')
  }
  export const confirmepass = () => {
    message.warning('As senhas não coincidem');
  };

  export const mail = () => {
    message.warning('Email invalido é necessario um email com a termiação @epfundao.edu.pt ou contacte a sua entidade ');
  };

  export const mailIgual = () => {
    message.warning('Email já verificado');
  };