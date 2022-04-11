export enum Features {
  Tab1 = 'tab1',
  Tab2 = 'tab2',
  Card1 = 'Card1',
  Card2 = 'Card2',
  Card3 = 'Card3',
}

export enum Permission {
  None = 'None',
  View = 'View',
  Admin = 'Admin',
}

export class IFeaturePermission {
  feature: Features;
  permission: Permission;
}
