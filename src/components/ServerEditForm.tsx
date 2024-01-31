import React, { useState } from 'react';
import { ServerModel, ServerType } from '../models/ServerModel';

interface ServerEditFormProps {
  server: ServerModel;
  onSave: (server: ServerModel) => void;
}

export const ServerEditForm: React.FC<ServerEditFormProps> = ({ server, onSave }) => {
  const [serverName, setServerName] = useState(server.server_name);
  const [serverType, setServerType] = useState<ServerType>(server.server_type as ServerType);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave({ ...server, server_name: serverName, server_type: serverType });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="serverName" className="block text-sm font-medium text-gray-700">Server Name</label>
        <input
          type="text"
          id="serverName"
          value={serverName}
          onChange={(e) => setServerName(e.target.value)}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
        />
      </div>
      <div>
        <label htmlFor="serverType" className="block text-sm font-medium text-gray-700">Server Type</label>
        <select
          id="serverType"
          value={serverType}
          onChange={(e) => setServerType(e.target.value as ServerType)}
          className="mt-1 block w-full pl-3 pr-10 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
        >
          <option value="vds">VDS</option>
          <option value="dedicated">Dedicated</option>
          <option value="hosting">Hosting</option>
        </select>
      </div>
      <button type="submit" className="w-full px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">
        Save Changes
      </button>
    </form>
  );
};
