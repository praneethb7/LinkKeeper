export interface Link{
  _id: string,
  url: string,
  title: string,
  description?: string,
  tags:string[],
  createdAt: Date
}

