export type Contributor = {
	github: string;
	displayName?: string;
	role: string;
	contributions: string[];
};

export const communityContributors: Contributor[] = [
	{
		github: 'GitPolyakoff',
		role: 'Translator',
		contributions: ['Russian (ru) documentation — core guides and homepage'],
	},
];

export const teamContributors: Contributor[] = [
	{
		github: 'olususus',
		displayName: 'TrucklineMP Team',
		role: 'Maintainer',
		contributions: ['Documentation site maintenance and English source content'],
	},
];
