<div align="center">

[![license](https://img.shields.io/badge/license-Apache%202-blue)](/LICENSE.md)
[![npm latest package](https://img.shields.io/npm/v/@boeschj/widget/latest.svg)](https://www.npmjs.com/package/@boeschj/widget)
[![npm downloads](https://img.shields.io/npm/dm/@boeschj/widget.svg)](https://www.npmjs.com/package/@boeschj/widget)
[![Crowdin](https://badges.crowdin.net/lifi-widget/localized.svg)](https://crowdin.com/project/lifi-widget)
[![Follow on Twitter](https://img.shields.io/twitter/follow/lifiprotocol.svg?label=follow+LI.FI)](https://twitter.com/lifiprotocol)

</div>

<h1 align="center">LI.FI Widget</h1>

This repository contains LI.FI Widget and supporting libraries.

- [_LI.FI Widget_](https://li.fi/widget/) for cross-chain bridging and swapping. It will drive your multi-chain strategy and attract new users from everywhere.

- [_LI.FI Wallet Management_](https://www.npmjs.com/package/@boeschj/wallet-management) is our library of hooks that can help you gain complete control over your app's wallet management.

## Installation

### LI.FI Widget

LI.FI Widget is available as an [npm package](https://www.npmjs.com/package/@boeschj/widget).

**npm:**

```sh
npm install @boeschj/widget
```

**yarn:**

```sh
yarn add @boeschj/widget
```

### LI.FI Wallet Management

LI.FI Wallet Management is available as an [npm package](https://www.npmjs.com/package/@boeschj/wallet-management).

**npm:**

```sh
npm install @boeschj/wallet-management
```

**yarn:**

```sh
yarn add @boeschj/wallet-management
```

## Getting started with LI.FI Widget

Here is an example of a basic app using LI.FI Widget:

```tsx
import { LiFiWidget, WidgetConfig } from '@boeschj/widget';

const widgetConfig: WidgetConfig = {
  containerStyle: {
    border: '1px solid rgb(234, 234, 234)',
    borderRadius: '16px',
  },
};

export const WidgetPage = () => {
  return (
    <LiFiWidget integrator="Your dApp/company name" config={widgetConfig} />
  );
};
```

## Examples

Visit our [playground](https://playground.li.fi) to see how you can customize your [LI.FI Widget](https://www.npmjs.com/package/@boeschj/widget) experience.

## Documentation

[LI.FI Widget Documentation](https://docs.li.fi/integrate-li.fi-widget/li.fi-widget-overview)

## Changelog

The [changelog](/CHANGELOG.md) is regularly updated to reflect what's changed in each new release.

## License

This project is licensed under the terms of the
[Apache-2.0](/LICENSE.md).
