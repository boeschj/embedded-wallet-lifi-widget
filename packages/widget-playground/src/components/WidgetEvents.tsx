import type {
  RouteExecutionUpdate,
  RouteHighValueLossUpdate,
} from '@boeschj/widget';
import { WidgetEvent, useWidgetEvents } from '@boeschj/widget';
import type { Route } from '@lifi/sdk';
import { useEffect } from 'react';

export const WidgetEvents = () => {
  const widgetEvents = useWidgetEvents();

  useEffect(() => {
    const onRouteExecutionStarted = (route: Route) => {
      // console.log('onRouteExecutionStarted fired.');
    };
    const onRouteExecutionUpdated = (update: RouteExecutionUpdate) => {
      // console.log('onRouteExecutionUpdated fired.');
    };
    const onRouteExecutionCompleted = (route: Route) => {
      // console.log('onRouteExecutionCompleted fired.');
    };
    const onRouteExecutionFailed = (update: RouteExecutionUpdate) => {
      // console.log('onRouteExecutionFailed fired.');
    };
    const onRouteHighValueLoss = (update: RouteHighValueLossUpdate) => {
      // console.log('onRouteHighValueLoss continued.');
    };
    const onSendToWalletToggled = (open: boolean) => {
      // console.log('onSendToWalletToggled', open);
    };
    // const onRouteContactSupport = (supportId: RouteContactSupport) => {
    //  console.log('onRouteContactSupport clicked', supportId);
    // };
    widgetEvents.on(WidgetEvent.RouteExecutionStarted, onRouteExecutionStarted);
    widgetEvents.on(WidgetEvent.RouteExecutionUpdated, onRouteExecutionUpdated);
    widgetEvents.on(
      WidgetEvent.RouteExecutionCompleted,
      onRouteExecutionCompleted,
    );
    widgetEvents.on(WidgetEvent.RouteHighValueLoss, onRouteHighValueLoss);
    widgetEvents.on(WidgetEvent.RouteExecutionFailed, onRouteExecutionFailed);
    widgetEvents.on(WidgetEvent.SendToWalletToggled, onSendToWalletToggled);
    // widgetEvents.on(WidgetEvent.RouteContactSupport, onRouteContactSupport);
    return () => widgetEvents.all.clear();
  }, [widgetEvents]);

  return null;
};
