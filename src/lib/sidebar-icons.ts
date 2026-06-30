export const sidebarGroupIcons: Record<string, string> = {
	'VTC Programs': 'check-circle',
	'VTC Guides': 'setting',
	'Discord Bot': 'external',
	'Account Guides': 'user',
	Contribute: 'open-book',
};

export function getSidebarGroupIcon(label: string): string | undefined {
	return sidebarGroupIcons[label];
}
