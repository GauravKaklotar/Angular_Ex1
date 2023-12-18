export interface ITooltipData {
  type: 'address' | 'coordinates' | 'description';
  description?: string;
  address?: string;
  latitude?: number;
  longitude?: number;
}
