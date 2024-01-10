import type { Wallet } from '@boeschj/wallet-management';
import type { Signer } from '@ethersproject/abstract-signer';
import type { StaticToken } from '@lifi/sdk';

export interface WalletContextProps {
  account: WalletAccount;
  addChain(chainId: number): Promise<boolean>;
  addToken(chainId: number, token: StaticToken): Promise<void>;
  disconnect(wallet?: Wallet): void;
  switchChain(chainId: number): Promise<Signer | undefined>;
  connect(wallet?: Wallet | undefined): Promise<void>;
}

export interface WalletAccount {
  isActive?: boolean;
  chainId?: number;
  address?: string;
  signer?: Signer;
}
