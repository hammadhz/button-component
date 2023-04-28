import { Button } from "./components";

function App() {
  return (
    <div className="container mt-2">
      <div className="flex items-center gap-4">
        <Button>Default</Button>
        <Button variant="outline">Default</Button>
        <Button variant="text">Default</Button>
        <Button size="sm">Default</Button>
        <Button size="md">Default</Button>
        <Button size="lg">Default</Button>
        <Button color="default">Default</Button>
        <Button color="primary">Default</Button>
        <Button color="secondary">Secondary</Button>
        <Button color="danger">Danger</Button>
      </div>
    </div>
  );
}

export default App;
