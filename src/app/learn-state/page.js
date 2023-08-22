import CounterButton from "@/components/learn-state/CounterButton";

export default function Home() {
  return (
    <div className="h-screen w-full flex items-center justify-center">
      <div className="flex-row">
        <h1 className="font-bold">Clique para adicionar</h1>
        {/*            props              */}
        {/*              |                */}
        {/*              v                */}
        <CounterButton title="Adiciona +1" />
      </div>
    </div>
  );
}
