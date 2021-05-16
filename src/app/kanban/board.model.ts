export interface Board {
  id?: string;
  title?: string;
  priority?: number;
  tasks?: Task[];
}

export interface Task {
  description?: string;
  label?: 'purple1' | 'purple2' | 'purple3' | 'purple4' | 'purple5' | 'purple6';
}
