export namespace Beast {
	export interface IBeast {
		name: string;
		description: string;
		age: number;
		family: IFamily;
	}

	export interface IFamily {
	 	type: EType;
	 	oreol: EOreol | EOreol[];
	 	characteristics: ICaracteristics; 
	}

	export interface ICaracteristics {
		size: ESize | ESize[];
		food: EFood | EFood[];
	}

	export enum EType {
		BAGGINS = 'baggins',
		GOD = 'GOD',
		DEMONS = 'DEMONS',
	}

	export enum EOreol {
		WOODS = 'woods',
		SEAS = 'seas',
		OCEANS = 'oceans',
		FIELDS = 'fields',
		MACDONALDS = 'MacDonalds',
	} 

	export enum EFood {
		MEAT = 'meat',
		FISH = 'fish',
		YOU = 'you',
		ALL = 'all',
		FEARS_OF_PAVEL = 'Fears of Pavel',
	}

	export type TType = EType.BAGGINS | EType.GOD | EType.DEMONS;

	export type TOreol = EOreol.WOODS | EOreol.SEAS | EOreol.OCEANS | EOreol.FIELDS | EOreol.MACDONALDS;

	export type TFood = EFood.MEAT |  EFood.FISH | EFood.YOU | EFood.ALL | EFood.FEARS_OF_PAVEL;
}
