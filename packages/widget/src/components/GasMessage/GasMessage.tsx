import type { Route } from '@lifi/sdk';
import type { BoxProps } from '@mui/material';
import { Box, Collapse } from '@mui/material';
import { useFromTokenSufficiency, useGasSufficiency } from '../../hooks';
import { useWidgetConfig } from '../../providers/WidgetProvider/WidgetProvider';
import { FundsSufficiencyMessage } from './FundsSufficiencyMessage';
import { GasSufficiencyMessage } from './GasSufficiencyMessage';

interface GasMessageProps extends BoxProps {
  route?: Route;
}

export const GasMessage: React.FC<GasMessageProps> = ({ route, ...props }) => {
  const { insufficientGas } = useGasSufficiency(route);
  const { insufficientFromToken } = useFromTokenSufficiency(route);
  const { embeddedWalletConfig } = useWidgetConfig();

  const validInsufficientGas = insufficientGas?.length;

  return (
    <Collapse
      timeout={225}
      in={Boolean(insufficientFromToken || validInsufficientGas)}
      unmountOnExit
      mountOnEnter
    >
      <Box {...props}>
        {insufficientFromToken ? (
          <FundsSufficiencyMessage />
        ) : validInsufficientGas && !embeddedWalletConfig?.sponsorGas ? (
          <GasSufficiencyMessage insufficientGas={insufficientGas} />
        ) : null}
      </Box>
    </Collapse>
  );
};
