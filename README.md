# vendetta-devsocket

An updated fork of [maisymoe/enmity-devsocket](https://github.com/maisymoe/enmity-devsocket) which is focued on Vedetta but should be compatible with Enmity too

## Usage

# Running the client

* Clone the repo

```
git clone https://github.com/sdshan8/vendetta-devsocket
```

* Build

```
npm run build
```

* Serve

```
npm run serve
```

* There is also a dev server, with features such as hot reloading, available with `npm run dev`, for those who wish to contribute.

# Running the server

* Clone the original server as it works

```
git clone https://github.com/Beefers/enmity-devsocket-server
```

* Build the server

```
npm run build
```

* Start the server

```
npm run start
```

* Put the Server URL inside the Server URL textbox
  - Note: Server URL should be `ws://[address[:port]]` like `ws://127.0.0.1:4000`
* Hit "Connect"
* Connect to Vendetta/Bunny by:

  0. Enable Vendetta developer settings
      - Tapon the You tab Twice
      - General/Bunny page under the Vendetta or Bunny Category
      - Find and enable Developer Options
  1. Open the Developer page under the Vendetta or Bunny Category
  2. Fill in your Server URL
  3. Press the "Connect to debug websocket" button
* Connect Enmity to the server with the same URL, either via the autoconnect method in Settings or the `/websocket` command.
* Get developing!