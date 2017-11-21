export const defaultState = { 
	contracts: { 
		token: {}, 
		crowdsale: {addr:[], abiConstructor:[]},
		pricingStrategy: {addr:[], abiConstructor:[]},
		nullFinalizeAgent: {addr:[], abiConstructor:[]},
		finalizeAgent: {addr:[], abiConstructor:[]}
	}, 
	token: {
		name: '',
		ticker: '',
		supply: 0,
		decimals: '',
		reservedTokens: [],
		reservedTokensInput: {dim: "tokens"}
	},
	crowdsale: [{
		startTime: '',
		endTime: '',
		walletAddress: '',
		supply: '',
		whitelist: [], 
		whiteListElements: [], 
		whiteListInput: {}
	}],
	pricingStrategy: [{rate: ''}],
	blockTimeGeneration: 17,
	compilerVersion: "0.4.11",
	optimized: true,
	contractName: "MintedTokenCappedCrowdsaleExt",
	contractType: "white-list-with-cap",
	contractTypes: {
		standard: "standard",
		capped: "capped",
		whitelistwithcap: "white-list-with-cap"
	}
}

export const TRUNC_TO_DECIMALS = {
	DECIMALS18: -18
}

export const GAS_PRICE = 5000000000
export const UNKNOWN = "Unknown"
export const CHAINS = {
	UNKNOWN: 'Unknown',
	MAINNET: 'Mainnet',
	MORDEN: 'Morden',
	ROPSTEN: 'Ropsten',
	RINKEBY: 'Rinkeby',
	KOVAN: 'Kovan',
	ORACLES: 'Oracles dev test'
}

export const NAVIGATION_STEPS = {
	CROWDSALE_CONTRACT: 'Контракт краудсейл',
	TOKEN_SETUP: 'Параметры токена',
	CROWDSALE_SETUP: 'Параметры краудсейл',
	PUBLISH: 'Публикация',
	CROWDSALE_PAGE: 'Страница краудсейл'
}


export const VALIDATION_MESSAGES = {
	TIER: 'Название слоя от 1 до 30 символов',
	NAME: 'Название от 1 до 30 символов(ангийский)',
	TICKER: 'Не более 3х символов(английский)',
	SUPPLY: 'Положительное число отличное от нуля',
	DECIMALS: 'Введите число больше либо равное нулю, но меньше либо равное 18',
	WALLET_ADDRESS: 'Введите корректный адрес кошелька',
	START_TIME: 'Введите корректное время старта',
	END_TIME: 'Введите корректное время завершения',
	RATE: 'Введите положительное число'
}

export const TEXT_FIELDS = {
	NAME: 'Название',
	TICKER: 'Аббревиатура',
	SUPPLY: 'Эмиссия',
	DECIMALS: 'Десятичные',
	RATE: 'Курс',
	WALLET_ADDRESS: 'Адрес кошелька',
	START_TIME: 'Время старта',
	END_TIME: 'Время завершения',
	CROWDSALE_SETUP_NAME: 'Crowdsale setup name',
	ADDRESS: 'Адрес',
	MIN: 'Min',
	MAX: 'Max',
	MINCAP: 'Минимальный лимит инвестора',
	DIMENSION: 'Размерность',
	VALUE: 'Значение',
	MAX_CAP: 'Максимальный лимит',
	ALLOWMODIFYING: 'Модифицируемый',
	DISABLEWHITELISTING: 'Отключить предрегистрацию'
}

export const VALIDATION_TYPES = {
	VALID: "VALIDATED",
	EMPTY: 'EMPTY',
	INVALID: 'INVALID'
}
const { VALID, EMPTY, INVALID } = VALIDATION_TYPES

export const intitialStepTwoValidations = {
	validations: {
		name: EMPTY,
		decimals: EMPTY,
		ticker: EMPTY
	}
}

export const initialStepTwoValues = {
	token: {
		name: '',
		supply: 0,
		ticker: '',
		decimals: '',
		reservedTokens: [],
		reservedTokensInput: {dim: "tokens"}
	}
}

export const intitialStepThreeValidations = {
	validations: [{
		tier: VALID,
		startTime: VALID,
		endTime: VALID,
		walletAddress: EMPTY,
		supply: VALID,
		rate: EMPTY
	}]
}

export const initialStepThreeValues = {
	crowdsale: [{
		tier: '',
		startTime: '',
		endTime: '',
		walletAddress: '',
		supply: ''
	}]
}

export const FILE_CONTENTS = {
  common: [
    { field: 'name', value: 'Token name: ', parent: 'token' },
    { field: 'ticker', value: 'Token ticker: ', parent: 'token' },
    { field: 'decimals', value: 'Token decimals: ', parent: 'token' },
    { field: 'walletAddress', value: 'Multisig wallet address: ', parent: 'crowdsale' },
    { value: '*****************************', parent: 'none', fileValue: '' },
    { field: 'rate', value: 'Crowdsale rate: ', parent: 'pricingStrategy' },
    { field: 'startTime', value: 'Crowdsale start time: ', parent: 'crowdsale' },
    { field: 'endTime', value: 'Crowdsale end time: ', parent: 'crowdsale' },
    { value: 'Compiler Version: ', parent: 'none', fileValue: '0.4.11' },
    { value: 'Is optimization enabled?: ', parent: 'none', fileValue: 'true' },
    { value: '*****************************', parent: 'none', fileValue: '' }
  ],
  files: {
    order: [
      'safeMathLib',
      'token',
      'pricingStrategy',
      'crowdsale',
      'nullFinalizeAgent',
      'finalizeAgent'
    ],
    safeMathLib: {
      name: 'SafeMathLibExt',
      txt: [
        { value: 'SafeMathLib library name: ', parent: 'none', fileValue: 'SafeMathLibExt' },
        { field: 'addr', value: 'SafeMathLib library address: ', parent: 'contracts', child: 'safeMathLib' },
        { value: '*****************************', parent: 'none', fileValue: '' },
        { field: 'abi', value: '****SafeMathLib contract ABI:**** \n\n', parent: 'contracts', child: 'safeMathLib' }
      ],
      sol: {
        field: 'src',
        value: '****SafeMathLib contract source:**** \n\n',
        parent: 'contracts',
        child: 'safeMathLib'
      }

    },
    token: {
      name: 'CrowdsaleTokenExt',
      txt: [
        { value: 'Token contract name: ', parent: 'none', fileValue: 'CrowdsaleTokenExt' },
        { field: 'addr', value: 'Token contract address: ', parent: 'contracts', child: 'token' },
        { value: '*****************************', parent: 'none', fileValue: '' },
        { field: 'abi', value: '****Token contract ABI:**** \n\n', parent: 'contracts', child: 'token' },
        {
          field: 'abiConstructor',
          value: '****Token contract ABI encoded constructor arguments',
          parent: 'contracts',
          child: 'token'
        }
      ],
      sol: { field: 'src', value: '****Token contract source:**** \n\n', parent: 'contracts', child: 'token' }

    },
    pricingStrategy: {
      name: 'FlatPricingExt',
      txt: [
        { value: 'Pricing strategy contract name: ', parent: 'none', fileValue: 'FlatPricingExt' },
        { field: 'addr', value: 'Pricing strategy contract address', parent: 'contracts', child: 'pricingStrategy' },
        { value: '*****************************', parent: 'none', fileValue: '' },
        {
          field: 'abi',
          value: '****Pricing strategy contract ABI:**** \n\n',
          parent: 'contracts',
          child: 'pricingStrategy'
        },
        {
          field: 'abiConstructor',
          value: '****Pricing strategy contract ABI encoded constructor arguments',
          parent: 'contracts',
          child: 'pricingStrategy'
        }
      ],
      sol: {
        field: 'src',
        value: '****Pricing strategy contract source:**** \n\n',
        parent: 'contracts',
        child: 'pricingStrategy'
      }

    },
    crowdsale: {
      name: 'MintedTokenCappedCrowdsaleExt',
      txt: [
        { value: 'Crowdsale contract name: ', parent: 'none', fileValue: 'MintedTokenCappedCrowdsaleExt' },
        { field: 'addr', value: 'Crowdsale contract address', parent: 'contracts', child: 'crowdsale' },
        { value: '*****************************', parent: 'none', fileValue: '' },
        { field: 'abi', value: '****Crowdsale contract ABI:**** \n\n', parent: 'contracts', child: 'crowdsale' },
        {
          field: 'abiConstructor',
          value: '****Crowdsale contract ABI encoded constructor arguments',
          parent: 'contracts',
          child: 'crowdsale'
        }
      ],
      sol: { field: 'src', value: '****Crowdsale contract source:**** \n\n', parent: 'contracts', child: 'crowdsale' }

    },
    nullFinalizeAgent: {
      name: 'NullFinalizeAgentExt',
      txt: [
        { value: 'Null finalize agent contract name: ', parent: 'none', fileValue: 'NullFinalizeAgentExt' },
        {
          field: 'addr',
          value: 'Null finalize agent contract address',
          parent: 'contracts',
          child: 'finalizeAgent'
        },
        { value: '*****************************', parent: 'none', fileValue: '' },
        {
          field: 'abi',
          value: '****Null Finalize agent contract ABI:**** \n\n',
          parent: 'contracts',
          child: 'nullFinalizeAgent'
        },
        {
          field: 'abiConstructor',
          value: '****Null Finalize agent contract ABI encoded constructor arguments',
          parent: 'contracts',
          child: 'finalizeAgent'
        }
      ],
      sol: {
        field: 'src',
        value: '****Null Finalize agent contract source:**** \n\n',
        parent: 'contracts',
        child: 'nullFinalizeAgent'
      }

    },
    finalizeAgent: {
      name: 'ReservedTokensFinalizeAgent',
      txt: [
        { value: 'Finalize agent contract name: ', parent: 'none', fileValue: 'ReservedTokensFinalizeAgent' },
        { field: 'addr', value: 'Finalize agent contract address', parent: 'contracts', child: 'finalizeAgent' },
        { value: '*****************************', parent: 'none', fileValue: '' },
        {
          field: 'abi',
          value: '****Finalize agent contract ABI:**** \n\n',
          parent: 'contracts',
          child: 'finalizeAgent'
        },
        {
          field: 'abiConstructor',
          value: '****Finalize agent contract ABI encoded constructor arguments',
          parent: 'contracts',
          child: 'finalizeAgent'
        }
      ],
      sol: {
        field: 'src',
        value: '****Finalize agent contract source:**** \n\n',
        parent: 'contracts',
        child: 'finalizeAgent'
      }

    }
  }
}

export const DOWNLOAD_NAME = 'icowizard'
export const DOWNLOAD_TYPE = {
  text: 'text/plain',
  blob: 'blob'
}

export const INVESTMENT_OPTIONS = {
  METAMASK: 'metamask',
  QR: 'qr'
}
export const TOAST = {
	TYPE: {
		ERROR: 'error',
		INFO: 'info',
		SUCCESS: 'warning'
	},
	MESSAGE: {
		USER_REJECTED_TRANSACTION: 'Пользователь отклонил транзакцию',
		CONTRACT_DOWNLOAD_FAILED: 'Загрузка контракта неудалась',
		CONTRACT_DOWNLOAD_SUCCESS: 'Архив с кодом контракта загружен'},
	DEFAULT_OPTIONS: {
		position: 'top right',
		offset: '80px 14',
		time: 10000
	}
}
