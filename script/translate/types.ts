export type FunctionDefinition = {
	name: string;
	parameters_desc: Description;
	returns_desc: Description;
	description: string;
};

export interface PrimativeDescription {
	desc: string;
	type: string;
	allownull?: boolean;
	required?: number;
	default?: unknown;
}

export interface ArrayDescription {
	desc: string;
	required?: number;
	default?: unknown;
	content: Description;
}

export interface ObjectDescription {
	desc: string;
	required?: number;
	default?: unknown;
	keys: Record<string, Description>;
}

export type Description =
	| PrimativeDescription
	| ArrayDescription
	| ObjectDescription;
