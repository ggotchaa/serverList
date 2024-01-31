import React from 'react';
import { ServerModel } from '../models/ServerModel';

interface ServerListProps {
  servers: ServerModel[];
  onEdit: (server: ServerModel) => void;
}

export const ServerList: React.FC<ServerListProps> = ({ servers, onEdit }) => {
    return (
      <div className="space-y-4">
        {servers.map((server) => (
          <div key={server.customer_id} className="flex justify-between items-center p-4 border border-gray-200 rounded-lg shadow-lg bg-white mb-4">
            <div>
              <div className="text-lg font-semibold text-gray-800">{server.server_name}</div>
              <div className="text-sm text-gray-600">{server.server_type}</div>
            </div>
            <button
              onClick={() => onEdit(server)}
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300"
            >
              Edit
            </button>
          </div>
        ))}
      </div>
    );
  };
