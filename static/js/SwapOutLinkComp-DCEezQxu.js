import {
    T as O,
    b as ne,
    c as W,
    s as z,
    d as G,
    e as Q,
    f as X,
    w as l,
    a as ae,
    g as se,
    h as re,
    N as ce,
    S as ue,
    P as ie,
    u as me
} from "./el-loading-KWzNfS69.js";
import {
    s as U
} from "./tools-0n07ovjN.js";
import {
    g as de,
    c as E,
    d as pe,
    a as le
} from "./raydium-pda-BIkJKZEq.js";
import {
    d as J,
    ai as _e,
    h as M,
    v as fe,
    e as k,
    z as L,
    m as v,
    o as P,
    k as p,
    b as x,
    x as B,
    l as h,
    p as A,
    A as ke,
    y as he,
    bl as V,
    E as R,
    B as $,
    t as ge,
    D as ye
} from "./index-DejQ-iz-.js";
import {
    E as we,
    u as H,
    e as be,
    f as ve,
    b as Te,
    c as Ae,
    a as Se
} from "./index-Brp1LNR4.js";
import {
    E as Pe
} from "./el-dialog-BXbic-ED.js";
import {
    _ as xe
} from "./SvgIcon-BS4YQbSZ.js";
const q = z([X("instruction")]);

function Ie(o, t, n, e = [], s = O) {
    const c = ne([{
            pubkey: o,
            isSigner: !1,
            isWritable: !0
        }, {
            pubkey: t,
            isSigner: !1,
            isWritable: !0
        }], n, e),
        r = W.alloc(q.span);
    return q.encode({
        instruction: G.CloseAccount
    }, r), new Q({
        keys: c,
        programId: s,
        data: r
    })
}
const D = z([X("instruction")]);

function Ne(o, t = O) {
    const n = [{
            pubkey: o,
            isSigner: !1,
            isWritable: !0
        }],
        e = W.alloc(D.span);
    return D.encode({
        instruction: G.SyncNative
    }, e), new Q({
        keys: n,
        programId: t,
        data: e
    })
}
const Ce = "CPMMoo8L3F4NbTegBCKVNunggL7H1ZpdTHKxQB5qKP1C",
    Be = {
        name: "raydium_cp_swap",
        version: "0.2.0",
        spec: "0.1.0",
        description: "Raydium constant product AMM, supports Token2022 and without Openbook"
    },
    Ee = [{
        name: "collect_fund_fee",
        docs: ["Collect the fund fee accrued to the pool", "", "# Arguments", "", "* `ctx` - The context of accounts", "* `amount_0_requested` - The maximum amount of token_0 to send, can be 0 to collect fees in only token_1", "* `amount_1_requested` - The maximum amount of token_1 to send, can be 0 to collect fees in only token_0", ""],
        discriminator: [167, 138, 78, 149, 223, 194, 6, 126],
        accounts: [{
            name: "owner",
            docs: ["Only admin or fund_owner can collect fee now"],
            signer: !0
        }, {
            name: "authority",
            pda: {
                seeds: [{
                    kind: "const",
                    value: [118, 97, 117, 108, 116, 95, 97, 110, 100, 95, 108, 112, 95, 109, 105, 110, 116, 95, 97, 117, 116, 104, 95, 115, 101, 101, 100]
                }]
            }
        }, {
            name: "pool_state",
            docs: ["Pool state stores accumulated protocol fee amount"],
            writable: !0
        }, {
            name: "amm_config",
            docs: ["Amm config account stores fund_owner"]
        }, {
            name: "token_0_vault",
            docs: ["The address that holds pool tokens for token_0"],
            writable: !0
        }, {
            name: "token_1_vault",
            docs: ["The address that holds pool tokens for token_1"],
            writable: !0
        }, {
            name: "vault_0_mint",
            docs: ["The mint of token_0 vault"]
        }, {
            name: "vault_1_mint",
            docs: ["The mint of token_1 vault"]
        }, {
            name: "recipient_token_0_account",
            docs: ["The address that receives the collected token_0 fund fees"],
            writable: !0
        }, {
            name: "recipient_token_1_account",
            docs: ["The address that receives the collected token_1 fund fees"],
            writable: !0
        }, {
            name: "token_program",
            docs: ["The SPL program to perform token transfers"],
            address: "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA"
        }, {
            name: "token_program_2022",
            docs: ["The SPL program 2022 to perform token transfers"],
            address: "TokenzQdBNbLqP5VEhdkAS6EPFLC1PHnBqCXEpPxuEb"
        }],
        args: [{
            name: "amount_0_requested",
            type: "u64"
        }, {
            name: "amount_1_requested",
            type: "u64"
        }]
    }, {
        name: "collect_protocol_fee",
        docs: ["Collect the protocol fee accrued to the pool", "", "# Arguments", "", "* `ctx` - The context of accounts", "* `amount_0_requested` - The maximum amount of token_0 to send, can be 0 to collect fees in only token_1", "* `amount_1_requested` - The maximum amount of token_1 to send, can be 0 to collect fees in only token_0", ""],
        discriminator: [136, 136, 252, 221, 194, 66, 126, 89],
        accounts: [{
            name: "owner",
            docs: ["Only admin or owner can collect fee now"],
            signer: !0
        }, {
            name: "authority",
            pda: {
                seeds: [{
                    kind: "const",
                    value: [118, 97, 117, 108, 116, 95, 97, 110, 100, 95, 108, 112, 95, 109, 105, 110, 116, 95, 97, 117, 116, 104, 95, 115, 101, 101, 100]
                }]
            }
        }, {
            name: "pool_state",
            docs: ["Pool state stores accumulated protocol fee amount"],
            writable: !0
        }, {
            name: "amm_config",
            docs: ["Amm config account stores owner"]
        }, {
            name: "token_0_vault",
            docs: ["The address that holds pool tokens for token_0"],
            writable: !0
        }, {
            name: "token_1_vault",
            docs: ["The address that holds pool tokens for token_1"],
            writable: !0
        }, {
            name: "vault_0_mint",
            docs: ["The mint of token_0 vault"]
        }, {
            name: "vault_1_mint",
            docs: ["The mint of token_1 vault"]
        }, {
            name: "recipient_token_0_account",
            docs: ["The address that receives the collected token_0 protocol fees"],
            writable: !0
        }, {
            name: "recipient_token_1_account",
            docs: ["The address that receives the collected token_1 protocol fees"],
            writable: !0
        }, {
            name: "token_program",
            docs: ["The SPL program to perform token transfers"],
            address: "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA"
        }, {
            name: "token_program_2022",
            docs: ["The SPL program 2022 to perform token transfers"],
            address: "TokenzQdBNbLqP5VEhdkAS6EPFLC1PHnBqCXEpPxuEb"
        }],
        args: [{
            name: "amount_0_requested",
            type: "u64"
        }, {
            name: "amount_1_requested",
            type: "u64"
        }]
    }, {
        name: "create_amm_config",
        docs: ["# Arguments", "", "* `ctx`- The accounts needed by instruction.", "* `index` - The index of amm config, there may be multiple config.", "* `trade_fee_rate` - Trade fee rate, can be changed.", "* `protocol_fee_rate` - The rate of protocol fee within trade fee.", "* `fund_fee_rate` - The rate of fund fee within trade fee.", ""],
        discriminator: [137, 52, 237, 212, 215, 117, 108, 104],
        accounts: [{
            name: "owner",
            docs: ["Address to be set as protocol owner."],
            writable: !0,
            signer: !0,
            address: "GThUX1Atko4tqhN2NaiTazWSeFWMuiUvfFnyJyUghFMJ"
        }, {
            name: "amm_config",
            docs: ["Initialize config state account to store protocol owner address and fee rates."],
            writable: !0,
            pda: {
                seeds: [{
                    kind: "const",
                    value: [97, 109, 109, 95, 99, 111, 110, 102, 105, 103]
                }, {
                    kind: "arg",
                    path: "index"
                }]
            }
        }, {
            name: "system_program",
            address: "11111111111111111111111111111111"
        }],
        args: [{
            name: "index",
            type: "u16"
        }, {
            name: "trade_fee_rate",
            type: "u64"
        }, {
            name: "protocol_fee_rate",
            type: "u64"
        }, {
            name: "fund_fee_rate",
            type: "u64"
        }, {
            name: "create_pool_fee",
            type: "u64"
        }]
    }, {
        name: "deposit",
        docs: ["Deposit lp token to the pool", "", "# Arguments", "", "* `ctx`- The context of accounts", "* `lp_token_amount` - Pool token amount to transfer. token_a and token_b amount are set by the current exchange rate and size of the pool", "* `maximum_token_0_amount` -  Maximum token 0 amount to deposit, prevents excessive slippage", "* `maximum_token_1_amount` - Maximum token 1 amount to deposit, prevents excessive slippage", ""],
        discriminator: [242, 35, 198, 137, 82, 225, 242, 182],
        accounts: [{
            name: "owner",
            docs: ["Pays to mint the position"],
            signer: !0
        }, {
            name: "authority",
            pda: {
                seeds: [{
                    kind: "const",
                    value: [118, 97, 117, 108, 116, 95, 97, 110, 100, 95, 108, 112, 95, 109, 105, 110, 116, 95, 97, 117, 116, 104, 95, 115, 101, 101, 100]
                }]
            }
        }, {
            name: "pool_state",
            writable: !0
        }, {
            name: "owner_lp_token",
            docs: ["Owner lp token account"],
            writable: !0
        }, {
            name: "token_0_account",
            docs: ["The payer's token account for token_0"],
            writable: !0
        }, {
            name: "token_1_account",
            docs: ["The payer's token account for token_1"],
            writable: !0
        }, {
            name: "token_0_vault",
            docs: ["The address that holds pool tokens for token_0"],
            writable: !0
        }, {
            name: "token_1_vault",
            docs: ["The address that holds pool tokens for token_1"],
            writable: !0
        }, {
            name: "token_program",
            docs: ["token Program"],
            address: "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA"
        }, {
            name: "token_program_2022",
            docs: ["Token program 2022"],
            address: "TokenzQdBNbLqP5VEhdkAS6EPFLC1PHnBqCXEpPxuEb"
        }, {
            name: "vault_0_mint",
            docs: ["The mint of token_0 vault"]
        }, {
            name: "vault_1_mint",
            docs: ["The mint of token_1 vault"]
        }, {
            name: "lp_mint",
            docs: ["Lp token mint"],
            writable: !0
        }],
        args: [{
            name: "lp_token_amount",
            type: "u64"
        }, {
            name: "maximum_token_0_amount",
            type: "u64"
        }, {
            name: "maximum_token_1_amount",
            type: "u64"
        }]
    }, {
        name: "initialize",
        docs: ["Creates a pool for the given token pair and the initial price", "", "# Arguments", "", "* `ctx`- The context of accounts", "* `init_amount_0` - the initial amount_0 to deposit", "* `init_amount_1` - the initial amount_1 to deposit", "* `open_time` - the timestamp allowed for swap", ""],
        discriminator: [175, 175, 109, 31, 13, 152, 155, 237],
        accounts: [{
            name: "creator",
            docs: ["Address paying to create the pool. Can be anyone"],
            writable: !0,
            signer: !0
        }, {
            name: "amm_config",
            docs: ["Which config the pool belongs to."]
        }, {
            name: "authority",
            docs: ["pool vault and lp mint authority"],
            pda: {
                seeds: [{
                    kind: "const",
                    value: [118, 97, 117, 108, 116, 95, 97, 110, 100, 95, 108, 112, 95, 109, 105, 110, 116, 95, 97, 117, 116, 104, 95, 115, 101, 101, 100]
                }]
            }
        }, {
            name: "pool_state",
            docs: ["PDA account:", "seeds = [", "POOL_SEED.as_bytes(),", "amm_config.key().as_ref(),", "token_0_mint.key().as_ref(),", "token_1_mint.key().as_ref(),", "],", "", "Or random account: must be signed by cli"],
            writable: !0
        }, {
            name: "token_0_mint",
            docs: ["Token_0 mint, the key must smaller than token_1 mint."]
        }, {
            name: "token_1_mint",
            docs: ["Token_1 mint, the key must grater then token_0 mint."]
        }, {
            name: "lp_mint",
            docs: ["pool lp mint"],
            writable: !0,
            pda: {
                seeds: [{
                    kind: "const",
                    value: [112, 111, 111, 108, 95, 108, 112, 95, 109, 105, 110, 116]
                }, {
                    kind: "account",
                    path: "pool_state"
                }]
            }
        }, {
            name: "creator_token_0",
            docs: ["payer token0 account"],
            writable: !0
        }, {
            name: "creator_token_1",
            docs: ["creator token1 account"],
            writable: !0
        }, {
            name: "creator_lp_token",
            docs: ["creator lp token account"],
            writable: !0,
            pda: {
                seeds: [{
                    kind: "account",
                    path: "creator"
                }, {
                    kind: "const",
                    value: [6, 221, 246, 225, 215, 101, 161, 147, 217, 203, 225, 70, 206, 235, 121, 172, 28, 180, 133, 237, 95, 91, 55, 145, 58, 140, 245, 133, 126, 255, 0, 169]
                }, {
                    kind: "account",
                    path: "lp_mint"
                }],
                program: {
                    kind: "const",
                    value: [140, 151, 37, 143, 78, 36, 137, 241, 187, 61, 16, 41, 20, 142, 13, 131, 11, 90, 19, 153, 218, 255, 16, 132, 4, 142, 123, 216, 219, 233, 248, 89]
                }
            }
        }, {
            name: "token_0_vault",
            writable: !0,
            pda: {
                seeds: [{
                    kind: "const",
                    value: [112, 111, 111, 108, 95, 118, 97, 117, 108, 116]
                }, {
                    kind: "account",
                    path: "pool_state"
                }, {
                    kind: "account",
                    path: "token_0_mint"
                }]
            }
        }, {
            name: "token_1_vault",
            writable: !0,
            pda: {
                seeds: [{
                    kind: "const",
                    value: [112, 111, 111, 108, 95, 118, 97, 117, 108, 116]
                }, {
                    kind: "account",
                    path: "pool_state"
                }, {
                    kind: "account",
                    path: "token_1_mint"
                }]
            }
        }, {
            name: "create_pool_fee",
            docs: ["create pool fee account"],
            writable: !0,
            address: "DNXgeM9EiiaAbaWvwjHj9fQQLAX5ZsfHyvmYUNRAdNC8"
        }, {
            name: "observation_state",
            docs: ["an account to store oracle observations"],
            writable: !0,
            pda: {
                seeds: [{
                    kind: "const",
                    value: [111, 98, 115, 101, 114, 118, 97, 116, 105, 111, 110]
                }, {
                    kind: "account",
                    path: "pool_state"
                }]
            }
        }, {
            name: "token_program",
            docs: ["Program to create mint account and mint tokens"],
            address: "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA"
        }, {
            name: "token_0_program",
            docs: ["Spl token program or token program 2022"]
        }, {
            name: "token_1_program",
            docs: ["Spl token program or token program 2022"]
        }, {
            name: "associated_token_program",
            docs: ["Program to create an ATA for receiving position NFT"],
            address: "ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL"
        }, {
            name: "system_program",
            docs: ["To create a new program account"],
            address: "11111111111111111111111111111111"
        }, {
            name: "rent",
            docs: ["Sysvar for program account"],
            address: "SysvarRent111111111111111111111111111111111"
        }],
        args: [{
            name: "init_amount_0",
            type: "u64"
        }, {
            name: "init_amount_1",
            type: "u64"
        }, {
            name: "open_time",
            type: "u64"
        }]
    }, {
        name: "swap_base_input",
        docs: ["Swap the tokens in the pool base input amount", "", "# Arguments", "", "* `ctx`- The context of accounts", "* `amount_in` -  input amount to transfer, output to DESTINATION is based on the exchange rate", "* `minimum_amount_out` -  Minimum amount of output token, prevents excessive slippage", ""],
        discriminator: [143, 190, 90, 218, 196, 30, 51, 222],
        accounts: [{
            name: "payer",
            docs: ["The user performing the swap"],
            signer: !0
        }, {
            name: "authority",
            pda: {
                seeds: [{
                    kind: "const",
                    value: [118, 97, 117, 108, 116, 95, 97, 110, 100, 95, 108, 112, 95, 109, 105, 110, 116, 95, 97, 117, 116, 104, 95, 115, 101, 101, 100]
                }]
            }
        }, {
            name: "amm_config",
            docs: ["The factory state to read protocol fees"]
        }, {
            name: "pool_state",
            docs: ["The program account of the pool in which the swap will be performed"],
            writable: !0
        }, {
            name: "input_token_account",
            docs: ["The user token account for input token"],
            writable: !0
        }, {
            name: "output_token_account",
            docs: ["The user token account for output token"],
            writable: !0
        }, {
            name: "input_vault",
            docs: ["The vault token account for input token"],
            writable: !0
        }, {
            name: "output_vault",
            docs: ["The vault token account for output token"],
            writable: !0
        }, {
            name: "input_token_program",
            docs: ["SPL program for input token transfers"]
        }, {
            name: "output_token_program",
            docs: ["SPL program for output token transfers"]
        }, {
            name: "input_token_mint",
            docs: ["The mint of input token"]
        }, {
            name: "output_token_mint",
            docs: ["The mint of output token"]
        }, {
            name: "observation_state",
            docs: ["The program account for the most recent oracle observation"],
            writable: !0
        }],
        args: [{
            name: "amount_in",
            type: "u64"
        }, {
            name: "minimum_amount_out",
            type: "u64"
        }]
    }, {
        name: "swap_base_output",
        docs: ["Swap the tokens in the pool base output amount", "", "# Arguments", "", "* `ctx`- The context of accounts", "* `max_amount_in` -  input amount prevents excessive slippage", "* `amount_out` -  amount of output token", ""],
        discriminator: [55, 217, 98, 86, 163, 74, 180, 173],
        accounts: [{
            name: "payer",
            docs: ["The user performing the swap"],
            signer: !0
        }, {
            name: "authority",
            pda: {
                seeds: [{
                    kind: "const",
                    value: [118, 97, 117, 108, 116, 95, 97, 110, 100, 95, 108, 112, 95, 109, 105, 110, 116, 95, 97, 117, 116, 104, 95, 115, 101, 101, 100]
                }]
            }
        }, {
            name: "amm_config",
            docs: ["The factory state to read protocol fees"]
        }, {
            name: "pool_state",
            docs: ["The program account of the pool in which the swap will be performed"],
            writable: !0
        }, {
            name: "input_token_account",
            docs: ["The user token account for input token"],
            writable: !0
        }, {
            name: "output_token_account",
            docs: ["The user token account for output token"],
            writable: !0
        }, {
            name: "input_vault",
            docs: ["The vault token account for input token"],
            writable: !0
        }, {
            name: "output_vault",
            docs: ["The vault token account for output token"],
            writable: !0
        }, {
            name: "input_token_program",
            docs: ["SPL program for input token transfers"]
        }, {
            name: "output_token_program",
            docs: ["SPL program for output token transfers"]
        }, {
            name: "input_token_mint",
            docs: ["The mint of input token"]
        }, {
            name: "output_token_mint",
            docs: ["The mint of output token"]
        }, {
            name: "observation_state",
            docs: ["The program account for the most recent oracle observation"],
            writable: !0
        }],
        args: [{
            name: "max_amount_in",
            type: "u64"
        }, {
            name: "amount_out",
            type: "u64"
        }]
    }, {
        name: "update_amm_config",
        docs: ["Updates the owner of the amm config", "Must be called by the current owner or admin", "", "# Arguments", "", "* `ctx`- The context of accounts", "* `trade_fee_rate`- The new trade fee rate of amm config, be set when `param` is 0", "* `protocol_fee_rate`- The new protocol fee rate of amm config, be set when `param` is 1", "* `fund_fee_rate`- The new fund fee rate of amm config, be set when `param` is 2", "* `new_owner`- The config's new owner, be set when `param` is 3", "* `new_fund_owner`- The config's new fund owner, be set when `param` is 4", "* `param`- The value can be 0 | 1 | 2 | 3 | 4, otherwise will report a error", ""],
        discriminator: [49, 60, 174, 136, 154, 28, 116, 200],
        accounts: [{
            name: "owner",
            docs: ["The amm config owner or admin"],
            signer: !0,
            address: "GThUX1Atko4tqhN2NaiTazWSeFWMuiUvfFnyJyUghFMJ"
        }, {
            name: "amm_config",
            docs: ["Amm config account to be changed"],
            writable: !0
        }],
        args: [{
            name: "param",
            type: "u8"
        }, {
            name: "value",
            type: "u64"
        }]
    }, {
        name: "update_pool_status",
        docs: ["Update pool status for given value", "", "# Arguments", "", "* `ctx`- The context of accounts", "* `status` - The value of status", ""],
        discriminator: [130, 87, 108, 6, 46, 224, 117, 123],
        accounts: [{
            name: "authority",
            signer: !0,
            address: "GThUX1Atko4tqhN2NaiTazWSeFWMuiUvfFnyJyUghFMJ"
        }, {
            name: "pool_state",
            writable: !0
        }],
        args: [{
            name: "status",
            type: "u8"
        }]
    }, {
        name: "withdraw",
        docs: ["Withdraw lp for token0 and token1", "", "# Arguments", "", "* `ctx`- The context of accounts", "* `lp_token_amount` - Amount of pool tokens to burn. User receives an output of token a and b based on the percentage of the pool tokens that are returned.", "* `minimum_token_0_amount` -  Minimum amount of token 0 to receive, prevents excessive slippage", "* `minimum_token_1_amount` -  Minimum amount of token 1 to receive, prevents excessive slippage", ""],
        discriminator: [183, 18, 70, 156, 148, 109, 161, 34],
        accounts: [{
            name: "owner",
            docs: ["Pays to mint the position"],
            signer: !0
        }, {
            name: "authority",
            pda: {
                seeds: [{
                    kind: "const",
                    value: [118, 97, 117, 108, 116, 95, 97, 110, 100, 95, 108, 112, 95, 109, 105, 110, 116, 95, 97, 117, 116, 104, 95, 115, 101, 101, 100]
                }]
            }
        }, {
            name: "pool_state",
            docs: ["Pool state account"],
            writable: !0
        }, {
            name: "owner_lp_token",
            docs: ["Owner lp token account"],
            writable: !0
        }, {
            name: "token_0_account",
            docs: ["The token account for receive token_0,"],
            writable: !0
        }, {
            name: "token_1_account",
            docs: ["The token account for receive token_1"],
            writable: !0
        }, {
            name: "token_0_vault",
            docs: ["The address that holds pool tokens for token_0"],
            writable: !0
        }, {
            name: "token_1_vault",
            docs: ["The address that holds pool tokens for token_1"],
            writable: !0
        }, {
            name: "token_program",
            docs: ["token Program"],
            address: "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA"
        }, {
            name: "token_program_2022",
            docs: ["Token program 2022"],
            address: "TokenzQdBNbLqP5VEhdkAS6EPFLC1PHnBqCXEpPxuEb"
        }, {
            name: "vault_0_mint",
            docs: ["The mint of token_0 vault"]
        }, {
            name: "vault_1_mint",
            docs: ["The mint of token_1 vault"]
        }, {
            name: "lp_mint",
            docs: ["Pool lp token mint"],
            writable: !0
        }, {
            name: "memo_program",
            docs: ["memo program"],
            address: "MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr"
        }],
        args: [{
            name: "lp_token_amount",
            type: "u64"
        }, {
            name: "minimum_token_0_amount",
            type: "u64"
        }, {
            name: "minimum_token_1_amount",
            type: "u64"
        }]
    }],
    Me = [{
        name: "AmmConfig",
        discriminator: [218, 244, 33, 104, 203, 203, 43, 111]
    }, {
        name: "ObservationState",
        discriminator: [122, 174, 197, 53, 129, 9, 165, 132]
    }, {
        name: "PoolState",
        discriminator: [247, 237, 227, 245, 215, 195, 222, 70]
    }],
    Le = [{
        name: "LpChangeEvent",
        discriminator: [121, 163, 205, 201, 57, 218, 117, 60]
    }, {
        name: "SwapEvent",
        discriminator: [64, 198, 205, 232, 38, 8, 113, 226]
    }],
    Ve = [{
        code: 6e3,
        name: "NotApproved",
        msg: "Not approved"
    }, {
        code: 6001,
        name: "InvalidOwner",
        msg: "Input account owner is not the program address"
    }, {
        code: 6002,
        name: "EmptySupply",
        msg: "Input token account empty"
    }, {
        code: 6003,
        name: "InvalidInput",
        msg: "InvalidInput"
    }, {
        code: 6004,
        name: "IncorrectLpMint",
        msg: "Address of the provided lp token mint is incorrect"
    }, {
        code: 6005,
        name: "ExceededSlippage",
        msg: "Exceeds desired slippage limit"
    }, {
        code: 6006,
        name: "ZeroTradingTokens",
        msg: "Given pool token amount results in zero trading tokens"
    }, {
        code: 6007,
        name: "NotSupportMint",
        msg: "Not support token_2022 mint extension"
    }, {
        code: 6008,
        name: "InvalidVault",
        msg: "invaild vault"
    }, {
        code: 6009,
        name: "InitLpAmountTooLess",
        msg: "Init lp amount is too less(Because 100 amount lp will be locked)"
    }, {
        code: 6010,
        name: "TransferFeeCalculateNotMatch",
        msg: "TransferFee calculate not match"
    }],
    qe = [{
        name: "AmmConfig",
        docs: ["Holds the current owner of the factory"],
        type: {
            kind: "struct",
            fields: [{
                name: "bump",
                docs: ["Bump to identify PDA"],
                type: "u8"
            }, {
                name: "disable_create_pool",
                docs: ["Status to control if new pool can be create"],
                type: "bool"
            }, {
                name: "index",
                docs: ["Config index"],
                type: "u16"
            }, {
                name: "trade_fee_rate",
                docs: ["The trade fee, denominated in hundredths of a bip (10^-6)"],
                type: "u64"
            }, {
                name: "protocol_fee_rate",
                docs: ["The protocol fee"],
                type: "u64"
            }, {
                name: "fund_fee_rate",
                docs: ["The fund fee, denominated in hundredths of a bip (10^-6)"],
                type: "u64"
            }, {
                name: "create_pool_fee",
                docs: ["Fee for create a new pool"],
                type: "u64"
            }, {
                name: "protocol_owner",
                docs: ["Address of the protocol fee owner"],
                type: "pubkey"
            }, {
                name: "fund_owner",
                docs: ["Address of the fund fee owner"],
                type: "pubkey"
            }, {
                name: "padding",
                docs: ["padding"],
                type: {
                    array: ["u64", 16]
                }
            }]
        }
    }, {
        name: "LpChangeEvent",
        docs: ["Emitted when deposit and withdraw"],
        type: {
            kind: "struct",
            fields: [{
                name: "pool_id",
                type: "pubkey"
            }, {
                name: "lp_amount_before",
                type: "u64"
            }, {
                name: "token_0_vault_before",
                docs: ["pool vault sub trade fees"],
                type: "u64"
            }, {
                name: "token_1_vault_before",
                docs: ["pool vault sub trade fees"],
                type: "u64"
            }, {
                name: "token_0_amount",
                docs: ["calculate result without transfer fee"],
                type: "u64"
            }, {
                name: "token_1_amount",
                docs: ["calculate result without transfer fee"],
                type: "u64"
            }, {
                name: "token_0_transfer_fee",
                type: "u64"
            }, {
                name: "token_1_transfer_fee",
                type: "u64"
            }, {
                name: "change_type",
                type: "u8"
            }]
        }
    }, {
        name: "Observation",
        docs: ["The element of observations in ObservationState"],
        serialization: "bytemuckunsafe",
        repr: {
            kind: "c",
            packed: !0
        },
        type: {
            kind: "struct",
            fields: [{
                name: "block_timestamp",
                docs: ["The block timestamp of the observation"],
                type: "u64"
            }, {
                name: "cumulative_token_0_price_x32",
                docs: ["the cumulative of token0 price during the duration time, Q32.32, the remaining 64 bit for overflow"],
                type: "u128"
            }, {
                name: "cumulative_token_1_price_x32",
                docs: ["the cumulative of token1 price during the duration time, Q32.32, the remaining 64 bit for overflow"],
                type: "u128"
            }]
        }
    }, {
        name: "ObservationState",
        serialization: "bytemuckunsafe",
        repr: {
            kind: "c",
            packed: !0
        },
        type: {
            kind: "struct",
            fields: [{
                name: "initialized",
                docs: ["Whether the ObservationState is initialized"],
                type: "bool"
            }, {
                name: "observation_index",
                docs: ["the most-recently updated index of the observations array"],
                type: "u16"
            }, {
                name: "pool_id",
                type: "pubkey"
            }, {
                name: "observations",
                docs: ["observation array"],
                type: {
                    array: [{
                        defined: {
                            name: "Observation"
                        }
                    }, 100]
                }
            }, {
                name: "padding",
                docs: ["padding for feature update"],
                type: {
                    array: ["u64", 4]
                }
            }]
        }
    }, {
        name: "PoolState",
        serialization: "bytemuckunsafe",
        repr: {
            kind: "c",
            packed: !0
        },
        type: {
            kind: "struct",
            fields: [{
                name: "amm_config",
                docs: ["Which config the pool belongs"],
                type: "pubkey"
            }, {
                name: "pool_creator",
                docs: ["pool creator"],
                type: "pubkey"
            }, {
                name: "token_0_vault",
                docs: ["Token A"],
                type: "pubkey"
            }, {
                name: "token_1_vault",
                docs: ["Token B"],
                type: "pubkey"
            }, {
                name: "lp_mint",
                docs: ["Pool tokens are issued when A or B tokens are deposited.", "Pool tokens can be withdrawn back to the original A or B token."],
                type: "pubkey"
            }, {
                name: "token_0_mint",
                docs: ["Mint information for token A"],
                type: "pubkey"
            }, {
                name: "token_1_mint",
                docs: ["Mint information for token B"],
                type: "pubkey"
            }, {
                name: "token_0_program",
                docs: ["token_0 program"],
                type: "pubkey"
            }, {
                name: "token_1_program",
                docs: ["token_1 program"],
                type: "pubkey"
            }, {
                name: "observation_key",
                docs: ["observation account to store oracle data"],
                type: "pubkey"
            }, {
                name: "auth_bump",
                type: "u8"
            }, {
                name: "status",
                docs: ["Bitwise representation of the state of the pool", "bit0, 1: disable deposit(value is 1), 0: normal", "bit1, 1: disable withdraw(value is 2), 0: normal", "bit2, 1: disable swap(value is 4), 0: normal"],
                type: "u8"
            }, {
                name: "lp_mint_decimals",
                type: "u8"
            }, {
                name: "mint_0_decimals",
                docs: ["mint0 and mint1 decimals"],
                type: "u8"
            }, {
                name: "mint_1_decimals",
                type: "u8"
            }, {
                name: "lp_supply",
                docs: ["True circulating supply without burns and lock ups"],
                type: "u64"
            }, {
                name: "protocol_fees_token_0",
                docs: ["The amounts of token_0 and token_1 that are owed to the liquidity provider."],
                type: "u64"
            }, {
                name: "protocol_fees_token_1",
                type: "u64"
            }, {
                name: "fund_fees_token_0",
                type: "u64"
            }, {
                name: "fund_fees_token_1",
                type: "u64"
            }, {
                name: "open_time",
                docs: ["The timestamp allowed for swap in the pool."],
                type: "u64"
            }, {
                name: "recent_epoch",
                docs: ["recent epoch"],
                type: "u64"
            }, {
                name: "padding",
                docs: ["padding for future updates"],
                type: {
                    array: ["u64", 31]
                }
            }]
        }
    }, {
        name: "SwapEvent",
        docs: ["Emitted when swap"],
        type: {
            kind: "struct",
            fields: [{
                name: "pool_id",
                type: "pubkey"
            }, {
                name: "input_vault_before",
                docs: ["pool vault sub trade fees"],
                type: "u64"
            }, {
                name: "output_vault_before",
                docs: ["pool vault sub trade fees"],
                type: "u64"
            }, {
                name: "input_amount",
                docs: ["calculate result without transfer fee"],
                type: "u64"
            }, {
                name: "output_amount",
                docs: ["calculate result without transfer fee"],
                type: "u64"
            }, {
                name: "input_transfer_fee",
                type: "u64"
            }, {
                name: "output_transfer_fee",
                type: "u64"
            }, {
                name: "base_input",
                type: "bool"
            }]
        }
    }],
    K = {
        address: Ce,
        metadata: Be,
        instructions: Ee,
        accounts: Me,
        events: Le,
        errors: Ve,
        types: qe
    },
    De = me(),
    I = .0025;
async function N(o) {
    o = l.translateAddress(o);
    const t = await l.connection.getAccountInfo(o);
    if (!t) throw new Error("Mint account not found");
    return t.owner
}
const Fe = async () => await l.getProgramAnchor(K), mt = async ({
    inputToken: o,
    outputToken: t
}) => {
    o = l.translateAddress(o), t = l.translateAddress(t), [o, t] = U(o, t);
    const {
        poolState: n,
        poolAddress: e
    } = await Z({
        inputToken: o,
        outputToken: t
    });
    return {
        poolState: n,
        poolAddress: e
    }
}, Z = async ({
    inputToken: o,
    outputToken: t
}) => {
    const n = await Fe(),
        e = De.ProgramIds.configAddress,
        [s, c] = await le(e, o, t, n.programId),
        r = await Oe(s, n);
    return {
        program: n,
        poolConfig: e,
        poolAddress: s,
        poolState: r
    }
}, Oe = async (o, t) => {
    try {
        return t = t || await l.getProgramAnchor(K), await t.account.poolState.fetch(o)
    } catch (n) {
        throw n
    }
}, dt = async (o, t) => {
    var y, g, d, w, T, b;
    t = l.translateAddress(t);
    const {
        token0Vault: n,
        token1Vault: e,
        token0Mint: s
    } = o, c = await l.connection.getMultipleParsedAccounts([n, e]), r = (y = c.value[0]) == null ? void 0 : y.data, u = (g = c.value[1]) == null ? void 0 : g.data;
    if (!r || !u) throw new Error("Failed to fetch token data");
    const i = ("parsed" in r ? (w = (d = r.parsed) == null ? void 0 : d.info) == null ? void 0 : w.tokenAmount : {}) || {},
        _ = ("parsed" in u ? (b = (T = u.parsed) == null ? void 0 : T.info) == null ? void 0 : b.tokenAmount : {}) || {},
        a = i.uiAmount || 0,
        f = _.uiAmount || 0,
        m = t.toBase58() === s.toBase58();
    return {
        poolX: m ? a : f,
        poolY: m ? f : a,
        token0IsInputToken: m
    }
}, pt = async ({
    poolX: o,
    poolY: t,
    amount: n,
    type: e = "in"
}) => {
    if (e === "in") return We({
        poolX: o,
        poolY: t,
        inputX: n,
        feeRate: I
    });
    try {
        return ze({
            poolX: o,
            poolY: t,
            outputY: n,
            feeRate: I
        })
    } catch (s) {
        return we({
            type: "error",
            title: "Error",
            message: s.message
        }), {
            inputAmount: 0,
            outputAmount: n,
            priceImpactPct: 0,
            swapStartPrice: 0,
            swapEndPrice: 0,
            swapPrice: 0,
            fee: 0
        }
    }
}, We = ({
    poolX: o,
    poolY: t,
    inputX: n,
    feeRate: e = I
}) => {
    const s = n * (1 - e),
        c = n - s,
        r = o + s,
        u = o * t / r,
        i = t - u,
        _ = t / o,
        a = u / r,
        f = i / n,
        m = (a - _) / _ / 2 * 100;
    return {
        outputAmount: i,
        inputAmount: n,
        priceImpactPct: m,
        swapStartPrice: _,
        swapEndPrice: a,
        swapPrice: f,
        fee: c
    }
};

function ze({
    poolX: o,
    poolY: t,
    outputY: n,
    feeRate: e = I
}) {
    if (n <= 0 || n >= t) throw new Error("The exchange amount must be greater than 0 and less than " + t);
    const s = t - n,
        c = o * t / s,
        r = c - o,
        u = r / (1 - e),
        i = t / o,
        _ = s / c,
        a = n / u,
        f = (_ - i) / i / 2 * 100,
        m = u - r;
    return {
        inputAmount: u,
        outputAmount: n,
        priceImpactPct: f,
        swapStartPrice: i,
        swapEndPrice: _,
        swapPrice: a,
        fee: m
    }
}
const lt = async ({
    inputToken: o,
    outputToken: t,
    amount_in: n,
    minimum_amount_out: e
}) => {
    const s = await N(o),
        c = await N(t);
    return await j({
        _inputToken: o,
        _inputTokenProgram: s,
        _outputToken: t,
        _outputTokenProgram: c,
        _amount_in: n,
        _minimum_amount_out: e,
        isSwapOut: !1
    })
}, _t = async ({
    inputToken: o,
    outputToken: t,
    amount_out: n,
    maximum_amount_in: e
}) => {
    const s = await N(o),
        c = await N(t);
    return await j({
        _inputToken: o,
        _inputTokenProgram: s,
        _outputToken: t,
        _outputTokenProgram: c,
        _amount_in: e,
        _minimum_amount_out: n,
        isSwapOut: !0
    })
}, j = async ({
    _inputToken: o,
    _inputTokenProgram: t,
    _outputToken: n,
    _outputTokenProgram: e,
    _amount_in: s,
    _minimum_amount_out: c,
    isSwapOut: r = !1
}) => {
    const u = H(),
        i = l.translateAddress(u.account),
        _ = l.translateAddress(o),
        a = l.translateAddress(t),
        f = l.translateAddress(n),
        m = l.translateAddress(e),
        y = s,
        g = c;
    let d = [];
    const {
        tokenAccount: w,
        createAccountInstructions: T,
        isSol: b
    } = await F({
        token: _,
        ownPublicKey: i,
        tokenProgram: a
    }), {
        tokenAccount: S,
        createAccountInstructions: Y,
        isSol: ee
    } = await F({
        token: f,
        ownPublicKey: i,
        tokenProgram: m
    });
    if (b) {
        const C = await Xe({
            ownPublicKey: i,
            inputTokenAccount: w,
            amount_in: y
        });
        T.push(...C)
    }
    d.push(...T), d.push(...Y);
    const te = await Qe({
        inputToken: _,
        inputTokenProgram: a,
        outputToken: f,
        outputTokenProgram: m,
        amount_in: y,
        minimum_amount_out: g,
        ownPublicKey: i,
        inputTokenAccount: w,
        outputTokenAccount: S,
        isSwapOut: r
    });
    if (d.push(te), b || ee) {
        const C = await Ue({
            ownPublicKey: i,
            tokenAccount: b ? w : S
        });
        d.push(C)
    }
    const oe = new ae().add(...d);
    return await Ge([oe])
}, Ge = async o => {
    const t = H(),
        n = new ie(t.account),
        e = await l.connection.getLatestBlockhash(),
        s = o.map(u => (u.recentBlockhash = e.blockhash, u.feePayer = n, u)),
        c = await l.provider.signAllTransactions(s);
    let r = [];
    for (const u of c) {
        const i = await l.connection.sendRawTransaction(u.serialize());
        r.push(i)
    }
    return r
}, F = async ({
    token: o,
    ownPublicKey: t,
    tokenProgram: n
}) => {
    const e = se(o, t, !1, n);
    if (await l.connection.getAccountInfo(e)) return {
        has: !0,
        isSol: !1,
        tokenAccount: e,
        createAccountInstructions: []
    };
    const c = re(t, e, t, o, n);
    return {
        has: !1,
        isSol: o.toBase58() === ce.toBase58(),
        tokenAccount: e,
        createAccountInstructions: [c]
    }
}, Qe = async ({
    inputToken: o,
    inputTokenProgram: t,
    outputToken: n,
    outputTokenProgram: e,
    ownPublicKey: s,
    inputTokenAccount: c,
    outputTokenAccount: r,
    amount_in: u,
    minimum_amount_out: i,
    isSwapOut: _ = !1
}) => {
    const [a, f] = U(o, n), {
        program: m,
        poolConfig: y,
        poolAddress: g
    } = await Z({
        inputToken: a,
        outputToken: f
    }), [d] = await de(m.programId), [w] = await E(g, o, m.programId), [T] = await E(g, n, m.programId), [b] = await pe(g, m.programId);
    let S;
    return _ ? S = await m.methods.swapBaseOutput(u, i).accounts({
        payer: s,
        authority: d,
        ammConfig: y,
        poolState: g,
        inputTokenAccount: c,
        outputTokenAccount: r,
        inputVault: w,
        outputVault: T,
        inputTokenProgram: t,
        outputTokenProgram: e,
        inputTokenMint: o,
        outputTokenMint: n,
        observationState: b
    }).instruction() : S = await m.methods.swapBaseInput(u, i).accounts({
        payer: s,
        authority: d,
        ammConfig: y,
        poolState: g,
        inputTokenAccount: c,
        outputTokenAccount: r,
        inputVault: w,
        outputVault: T,
        inputTokenProgram: t,
        outputTokenProgram: e,
        inputTokenMint: o,
        outputTokenMint: n,
        observationState: b
    }).instruction(), S
};
async function Xe({
    ownPublicKey: o,
    inputTokenAccount: t,
    amount_in: n
}) {
    const e = ue.transfer({
            fromPubkey: o,
            toPubkey: t,
            lamports: n
        }),
        s = Ne(t);
    return [e, s]
}
const Ue = async ({
    ownPublicKey: o,
    tokenAccount: t
}) => Ie(t, o, o), Je = {
    class: "tools"
}, Re = {
    class: "btns"
}, $e = {
    class: "iptDiv"
}, He = {
    key: 0,
    class: "tip"
}, Ke = {
    key: 0
}, Ze = {
    key: 1
}, je = {
    class: "dialog-footer"
}, Ye = J({
    __name: "SaveSlippage",
    props: {
        modelValue: {
            type: String,
            default: "0.001"
        },
        modelModifiers: {}
    },
    emits: ["update:modelValue"],
    setup(o, {
        expose: t
    }) {
        const n = _e(o, "modelValue"),
            e = M(`${be(Number(n.value||0),100)}`),
            s = () => {
                const _ = ve(e.value, {
                    decimalPrecision: 2
                });
                e.value = _, Number(e.value || 0) > 50 && (e.value = "50")
            },
            c = () => {
                if (!Number(e.value || 0)) {
                    e.value = "";
                    return
                }
                e.value = `${Math.abs(parseFloat(e.value))}`
            },
            r = M(!1),
            u = () => {
                r.value = !1, n.value = `${Te(e.value,100)}`
            };
        return t({
            init: () => {
                r.value = !0
            }
        }), (_, a) => {
            const f = ke,
                m = he,
                y = R,
                g = Pe;
            return P(), fe(g, {
                modelValue: k(r),
                "onUpdate:modelValue": a[4] || (a[4] = d => L(r) ? r.value = d : null),
                title: "Set max slippage",
                width: "500"
            }, {
                footer: v(() => [p("div", je, [h(f, {
                    class: "btn",
                    size: "large",
                    type: "primary",
                    onClick: u
                }, {
                    default: v(() => a[12] || (a[12] = [A(" Save ")])),
                    _: 1,
                    __: [12]
                })])]),
                default: v(() => [p("div", Je, [p("div", Re, [h(f, {
                    class: "tbtn",
                    type: k(e) === "1" ? "primary" : "default",
                    onClick: a[0] || (a[0] = d => e.value = "1")
                }, {
                    default: v(() => a[5] || (a[5] = [A("1%")])),
                    _: 1,
                    __: [5]
                }, 8, ["type"]), h(f, {
                    class: "tbtn",
                    type: k(e) === "2.5" ? "primary" : "default",
                    onClick: a[1] || (a[1] = d => e.value = "2.5")
                }, {
                    default: v(() => a[6] || (a[6] = [A("2.5%")])),
                    _: 1,
                    __: [6]
                }, 8, ["type"]), h(f, {
                    class: "tbtn",
                    type: k(e) === "5" ? "primary" : "default",
                    onClick: a[2] || (a[2] = d => e.value = "5")
                }, {
                    default: v(() => a[7] || (a[7] = [A("5%")])),
                    _: 1,
                    __: [7]
                }, 8, ["type"])]), p("div", $e, [a[8] || (a[8] = p("span", null, "Custom", -1)), h(m, {
                    class: "ipt",
                    modelValue: k(e),
                    "onUpdate:modelValue": a[3] || (a[3] = d => L(e) ? e.value = d : null),
                    placeholder: "1",
                    onInput: s,
                    onBlur: c
                }, null, 8, ["modelValue"]), a[9] || (a[9] = A(" % "))])]), Number(k(e) || 0) <= .5 || Number(k(e) || 0) > 3 ? (P(), x("div", He, [Number(k(e) || 0) <= .5 ? (P(), x("div", Ke, [h(y, {
                    class: "icon"
                }, {
                    default: v(() => [h(k(V))]),
                    _: 1
                }), a[10] || (a[10] = A(" Your transaction may fail "))])) : B("", !0), Number(k(e) || 0) > 3 ? (P(), x("div", Ze, [h(y, {
                    class: "icon"
                }, {
                    default: v(() => [h(k(V))]),
                    _: 1
                }), a[11] || (a[11] = A(" Your transaction may be frontrun and result in an unfavorable trade "))])) : B("", !0)])) : B("", !0), a[13] || (a[13] = p("div", {
                    class: "note"
                }, "this is the maximum amount of slippage you are willing to accept when placing trades.", -1))]),
                _: 1,
                __: [13]
            }, 8, ["modelValue"])
        }
    }
}), ft = $(Ye, [
    ["__scopeId", "data-v-e01e1267"]
]), et = {
    class: "outLink"
}, tt = J({
    __name: "SwapOutLinkComp",
    props: {
        contractAddress: {}
    },
    setup(o) {
        const t = n => {
            if (n === "Raydium") {
                window.open(`https://raydium.io/swap/?inputMint=sol&outputMint=${o.contractAddress}&referrer=Bemn3fbCJXDaxFus8ch9V18MHiqXeqdqb8v5Xqk15vgT`, "_blank");
                return
            }
            if (n === "Jupiter") {
                window.open(`https://jup.ag/swap?sell=So11111111111111111111111111111111111111112&buy=${o.contractAddress}`, "_blank");
                return
            }
            if (n === "GMGN") {
                window.open(`https://gmgn.ai/sol/token/nClbjiRm_${o.contractAddress}`, "_blank");
                return
            }
        };
        return (n, e) => {
            const s = R,
                c = xe;
            return P(), x("div", et, [p("div", {
                class: "item",
                onClick: e[0] || (e[0] = r => k(Se)(n.contractAddress))
            }, [p("div", null, [h(s, {
                class: "icon"
            }, {
                default: v(() => [h(k(ye))]),
                _: 1
            }), p("span", null, "Contract Address: " + ge(k(Ae)(n.contractAddress)), 1)])]), p("div", {
                class: "item",
                onClick: e[1] || (e[1] = r => t("Raydium"))
            }, [p("div", null, [h(c, {
                class: "icon",
                name: "export",
                color: "var(--hoverColor)"
            }), e[4] || (e[4] = p("span", null, "Trade on Raydium", -1))])]), p("div", {
                class: "item",
                onClick: e[2] || (e[2] = r => t("Jupiter"))
            }, [p("div", null, [h(c, {
                class: "icon",
                name: "export",
                color: "var(--hoverColor)"
            }), e[5] || (e[5] = p("span", null, "Trade on Jupiter", -1))])]), p("div", {
                class: "item",
                onClick: e[3] || (e[3] = r => t("GMGN"))
            }, [p("div", null, [h(c, {
                class: "icon",
                name: "export",
                color: "var(--hoverColor)"
            }), e[6] || (e[6] = p("span", null, "Trade on GMGN", -1))])])])
        }
    }
}), kt = $(tt, [
    ["__scopeId", "data-v-17fa18e3"]
]);
export {
    ft as S, dt as a, _t as b, pt as c, kt as d, mt as g, lt as s
};