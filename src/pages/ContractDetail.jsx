import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";

export default function ContractDetail() {
  const { id } = useParams();
  const [contract, setContract] = useState(null);

  useEffect(() => {
    fetch("/contracts.json")
      .then((res) => res.json())
      .then((data) => {
        const found = data.find((c) => c.id === id);
        setContract(found);
      });
  }, [id]);

  if (!contract) return <p>Loading...</p>;

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Topbar />
        <div className="p-6">
          <h2 className="text-2xl font-bold mb-4">{contract.name}</h2>
          <p>Parties: {contract.parties}</p>
          <p>Expiry: {contract.expiry}</p>
          <p>Status: {contract.status}</p>
          <p>Risk: {contract.risk}</p>
        </div>
      </div>
    </div>
  );
}
