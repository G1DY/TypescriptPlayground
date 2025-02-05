import { workerData } from "worker_threads";

type WorkMate = {
  id: number;
  name: string;
};
type Manager = {
  department: string;
  role: string;
};
type managerInfo = WorkMate & Manager;

const manager: managerInfo = {
  id: 123,
  name: "gideon",
  department: "Tech",
  role: "Team Lead",
};
console.log(manager.name);
