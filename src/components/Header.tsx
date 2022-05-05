import { ConnectButton } from "@rainbow-me/rainbowkit";

export const Header: React.FC = () => {
  return (
    <div className="py-2 w-full flex justify-center">
      <div className="px-4 flex max-w-7xl justify-between items-center w-full h-10">
        <div>
          <span className="font-bold">Alpha</span>
        </div>
        <div>
          <ConnectButton
            accountStatus="address"
            chainStatus="icon"
            showBalance={false}
          />
        </div>
      </div>
    </div>
  );
};
