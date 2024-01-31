import React, { useState, useEffect } from 'react';
import { ServerList } from '../components/ServerList';
import { ServerEditForm } from '../components/ServerEditForm';
import { ServerModel } from '@/models/ServerModel';

const Home: React.FC = () => {
  const [servers, setServers] = useState<ServerModel[]>([]);
  const [selectedServer, setSelectedServer] = useState<ServerModel | null>(null);
  const [isDataLoaded, setIsDataLoaded] = useState(false);

  useEffect(() => {
    const loadedServers = localStorage.getItem('servers');
    if (loadedServers) {
      setServers(JSON.parse(loadedServers));
    } else {
      setServers([
        { customer_id: "user1", server_name: "server7", server_type: "vds" },
        { customer_id: "user5", server_name: "server2", server_type: "dedicated" },
        { customer_id: "user3", server_name: "server4", server_type: "hosting" },
      ]);
    }
    setIsDataLoaded(true);
  }, []);

  useEffect(() => {
    if (isDataLoaded) {
      localStorage.setItem('servers', JSON.stringify(servers));
    }
  }, [servers, isDataLoaded]);

  const handleSelectServer = (server: ServerModel) => {
    setSelectedServer(server);
  };

  const handleSaveServer = (updatedServer: ServerModel) => {
    const updatedServers = servers.map((server) => (
      server.customer_id === updatedServer.customer_id ? updatedServer : server
    ));
    setServers(updatedServers);
    setSelectedServer(null);
  };

  return (
    <div className="container">
    <ServerList servers={servers} onEdit={handleSelectServer} />
    {selectedServer && <ServerEditForm server={selectedServer} onSave={handleSaveServer} />}
  </div>
  );
};

export default Home;
