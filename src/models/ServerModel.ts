export interface ServerModel {
    customer_id: string;
    server_name: string;
    server_type: string;
}
  
export type ServerType = 'vds' | 'dedicated' | 'hosting';
  