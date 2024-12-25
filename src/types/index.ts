export interface User {
  id: string;
  name: string;
  email: string;
  picture: string;
  role: 'student' | 'admin';
}

export interface Announcement {
  id: string;
  title: string;
  content: string;
  date: string;
  important: boolean;
}

export interface CalendarEvent {
  id: string;
  title: string;
  date: string;
  description: string;
  type: 'academic' | 'event' | 'holiday';
}

export interface Application {
  id: string;
  name: string;
  description: string;
  icon: string;
  url: string;
}