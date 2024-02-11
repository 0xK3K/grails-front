export const grails = [
  {
    name: 'UpgradeableImpl',
    type: 'impl',
    interface_name: 'openzeppelin::upgrades::interface::IUpgradeable'
  },
  {
    name: 'openzeppelin::upgrades::interface::IUpgradeable',
    type: 'interface',
    items: [
      {
        name: 'upgrade',
        type: 'function',
        inputs: [
          {
            name: 'new_class_hash',
            type: 'core::starknet::class_hash::ClassHash'
          }
        ],
        outputs: [],
        state_mutability: 'external'
      }
    ]
  },
  {
    name: 'Grails',
    type: 'impl',
    interface_name: 'grails::grails::IGrails'
  },
  {
    name: 'core::integer::u256',
    type: 'struct',
    members: [
      {
        name: 'low',
        type: 'core::integer::u128'
      },
      {
        name: 'high',
        type: 'core::integer::u128'
      }
    ]
  },
  {
    name: 'core::bool',
    type: 'enum',
    variants: [
      {
        name: 'False',
        type: '()'
      },
      {
        name: 'True',
        type: '()'
      }
    ]
  },
  {
    name: 'core::array::Span::<core::felt252>',
    type: 'struct',
    members: [
      {
        name: 'snapshot',
        type: '@core::array::Array::<core::felt252>'
      }
    ]
  },
  {
    name: 'grails::grails::IGrails',
    type: 'interface',
    items: [
      {
        name: 'allowance',
        type: 'function',
        inputs: [
          {
            name: 'owner',
            type: 'core::starknet::contract_address::ContractAddress'
          },
          {
            name: 'spender',
            type: 'core::starknet::contract_address::ContractAddress'
          }
        ],
        outputs: [
          {
            type: 'core::integer::u256'
          }
        ],
        state_mutability: 'view'
      },
      {
        name: 'approve',
        type: 'function',
        inputs: [
          {
            name: 'spender',
            type: 'core::starknet::contract_address::ContractAddress'
          },
          {
            name: 'amountOrId',
            type: 'core::integer::u256'
          }
        ],
        outputs: [
          {
            type: 'core::bool'
          }
        ],
        state_mutability: 'external'
      },
      {
        name: 'balance_of',
        type: 'function',
        inputs: [
          {
            name: 'account',
            type: 'core::starknet::contract_address::ContractAddress'
          }
        ],
        outputs: [
          {
            type: 'core::integer::u256'
          }
        ],
        state_mutability: 'view'
      },
      {
        name: 'balanceOf',
        type: 'function',
        inputs: [
          {
            name: 'account',
            type: 'core::starknet::contract_address::ContractAddress'
          }
        ],
        outputs: [
          {
            type: 'core::integer::u256'
          }
        ],
        state_mutability: 'view'
      },
      {
        name: 'baseTokenURI',
        type: 'function',
        inputs: [],
        outputs: [
          {
            type: 'core::felt252'
          }
        ],
        state_mutability: 'view'
      },
      {
        name: 'decimals',
        type: 'function',
        inputs: [],
        outputs: [
          {
            type: 'core::integer::u8'
          }
        ],
        state_mutability: 'view'
      },
      {
        name: 'erc20BalanceOf',
        type: 'function',
        inputs: [
          {
            name: 'account',
            type: 'core::starknet::contract_address::ContractAddress'
          }
        ],
        outputs: [
          {
            type: 'core::integer::u256'
          }
        ],
        state_mutability: 'view'
      },
      {
        name: 'erc20TotalSupply',
        type: 'function',
        inputs: [],
        outputs: [
          {
            type: 'core::integer::u256'
          }
        ],
        state_mutability: 'view'
      },
      {
        name: 'erc721TokensBankedInQueue',
        type: 'function',
        inputs: [],
        outputs: [
          {
            type: 'core::integer::u256'
          }
        ],
        state_mutability: 'view'
      },
      {
        name: 'erc721BalanceOf',
        type: 'function',
        inputs: [
          {
            name: 'account',
            type: 'core::starknet::contract_address::ContractAddress'
          }
        ],
        outputs: [
          {
            type: 'core::integer::u256'
          }
        ],
        state_mutability: 'view'
      },
      {
        name: 'erc721TotalSupply',
        type: 'function',
        inputs: [],
        outputs: [
          {
            type: 'core::integer::u256'
          }
        ],
        state_mutability: 'view'
      },
      {
        name: 'getApproved',
        type: 'function',
        inputs: [
          {
            name: 'tokenId',
            type: 'core::integer::u256'
          }
        ],
        outputs: [
          {
            type: 'core::starknet::contract_address::ContractAddress'
          }
        ],
        state_mutability: 'view'
      },
      {
        name: 'isApprovedForAll',
        type: 'function',
        inputs: [
          {
            name: 'owner',
            type: 'core::starknet::contract_address::ContractAddress'
          },
          {
            name: 'operator',
            type: 'core::starknet::contract_address::ContractAddress'
          }
        ],
        outputs: [
          {
            type: 'core::bool'
          }
        ],
        state_mutability: 'view'
      },
      {
        name: 'owned',
        type: 'function',
        inputs: [
          {
            name: 'owner',
            type: 'core::starknet::contract_address::ContractAddress'
          }
        ],
        outputs: [
          {
            type: 'core::array::Array::<core::integer::u256>'
          }
        ],
        state_mutability: 'view'
      },
      {
        name: 'ownerOf',
        type: 'function',
        inputs: [
          {
            name: 'id',
            type: 'core::integer::u256'
          }
        ],
        outputs: [
          {
            type: 'core::starknet::contract_address::ContractAddress'
          }
        ],
        state_mutability: 'view'
      },
      {
        name: 'name',
        type: 'function',
        inputs: [],
        outputs: [
          {
            type: 'core::felt252'
          }
        ],
        state_mutability: 'view'
      },
      {
        name: 'safe_transfer_from',
        type: 'function',
        inputs: [
          {
            name: 'from',
            type: 'core::starknet::contract_address::ContractAddress'
          },
          {
            name: 'to',
            type: 'core::starknet::contract_address::ContractAddress'
          },
          {
            name: 'amount_or_id',
            type: 'core::integer::u256'
          },
          {
            name: 'data',
            type: 'core::array::Span::<core::felt252>'
          }
        ],
        outputs: [],
        state_mutability: 'external'
      },
      {
        name: 'safeTransferFrom',
        type: 'function',
        inputs: [
          {
            name: 'from',
            type: 'core::starknet::contract_address::ContractAddress'
          },
          {
            name: 'to',
            type: 'core::starknet::contract_address::ContractAddress'
          },
          {
            name: 'amountOrId',
            type: 'core::integer::u256'
          },
          {
            name: 'data',
            type: 'core::array::Span::<core::felt252>'
          }
        ],
        outputs: [],
        state_mutability: 'external'
      },
      {
        name: 'setApprovalForAll',
        type: 'function',
        inputs: [
          {
            name: 'operator',
            type: 'core::starknet::contract_address::ContractAddress'
          },
          {
            name: 'approved',
            type: 'core::bool'
          }
        ],
        outputs: [],
        state_mutability: 'external'
      },
      {
        name: 'setDataURI',
        type: 'function',
        inputs: [
          {
            name: 'dataURI',
            type: 'core::felt252'
          }
        ],
        outputs: [],
        state_mutability: 'external'
      },
      {
        name: 'setTokenURI',
        type: 'function',
        inputs: [
          {
            name: 'baseTokenURI',
            type: 'core::felt252'
          }
        ],
        outputs: [],
        state_mutability: 'external'
      },
      {
        name: 'setWhitelist',
        type: 'function',
        inputs: [
          {
            name: 'target',
            type: 'core::starknet::contract_address::ContractAddress'
          },
          {
            name: 'state',
            type: 'core::bool'
          }
        ],
        outputs: [],
        state_mutability: 'external'
      },
      {
        name: 'symbol',
        type: 'function',
        inputs: [],
        outputs: [
          {
            type: 'core::felt252'
          }
        ],
        state_mutability: 'view'
      },
      {
        name: 'token_uri',
        type: 'function',
        inputs: [
          {
            name: 'token_id',
            type: 'core::integer::u256'
          }
        ],
        outputs: [
          {
            type: 'core::felt252'
          }
        ],
        state_mutability: 'view'
      },
      {
        name: 'tokenURI',
        type: 'function',
        inputs: [
          {
            name: 'tokenId',
            type: 'core::integer::u256'
          }
        ],
        outputs: [
          {
            type: 'core::felt252'
          }
        ],
        state_mutability: 'view'
      },
      {
        name: 'total_supply',
        type: 'function',
        inputs: [],
        outputs: [
          {
            type: 'core::integer::u256'
          }
        ],
        state_mutability: 'view'
      },
      {
        name: 'totalSupply',
        type: 'function',
        inputs: [],
        outputs: [
          {
            type: 'core::integer::u256'
          }
        ],
        state_mutability: 'view'
      },
      {
        name: 'transfer',
        type: 'function',
        inputs: [
          {
            name: 'to',
            type: 'core::starknet::contract_address::ContractAddress'
          },
          {
            name: 'amount',
            type: 'core::integer::u256'
          }
        ],
        outputs: [
          {
            type: 'core::bool'
          }
        ],
        state_mutability: 'external'
      },
      {
        name: 'transfer_from',
        type: 'function',
        inputs: [
          {
            name: 'from',
            type: 'core::starknet::contract_address::ContractAddress'
          },
          {
            name: 'to',
            type: 'core::starknet::contract_address::ContractAddress'
          },
          {
            name: 'amount_or_id',
            type: 'core::integer::u256'
          }
        ],
        outputs: [
          {
            type: 'core::bool'
          }
        ],
        state_mutability: 'external'
      },
      {
        name: 'transferFrom',
        type: 'function',
        inputs: [
          {
            name: 'from',
            type: 'core::starknet::contract_address::ContractAddress'
          },
          {
            name: 'to',
            type: 'core::starknet::contract_address::ContractAddress'
          },
          {
            name: 'amountOrId',
            type: 'core::integer::u256'
          }
        ],
        outputs: [
          {
            type: 'core::bool'
          }
        ],
        state_mutability: 'external'
      },
      {
        name: 'units',
        type: 'function',
        inputs: [],
        outputs: [
          {
            type: 'core::integer::u256'
          }
        ],
        state_mutability: 'view'
      },
      {
        name: 'whitelist',
        type: 'function',
        inputs: [
          {
            name: 'address',
            type: 'core::starknet::contract_address::ContractAddress'
          }
        ],
        outputs: [
          {
            type: 'core::bool'
          }
        ],
        state_mutability: 'view'
      }
    ]
  },
  {
    name: 'OwnableImpl',
    type: 'impl',
    interface_name: 'openzeppelin::access::ownable::interface::IOwnable'
  },
  {
    name: 'openzeppelin::access::ownable::interface::IOwnable',
    type: 'interface',
    items: [
      {
        name: 'owner',
        type: 'function',
        inputs: [],
        outputs: [
          {
            type: 'core::starknet::contract_address::ContractAddress'
          }
        ],
        state_mutability: 'view'
      },
      {
        name: 'transfer_ownership',
        type: 'function',
        inputs: [
          {
            name: 'new_owner',
            type: 'core::starknet::contract_address::ContractAddress'
          }
        ],
        outputs: [],
        state_mutability: 'external'
      },
      {
        name: 'renounce_ownership',
        type: 'function',
        inputs: [],
        outputs: [],
        state_mutability: 'external'
      }
    ]
  },
  {
    name: 'constructor',
    type: 'constructor',
    inputs: [
      {
        name: 'name',
        type: 'core::felt252'
      },
      {
        name: 'symbol',
        type: 'core::felt252'
      },
      {
        name: 'totalNativeSupply',
        type: 'core::integer::u256'
      },
      {
        name: 'owner',
        type: 'core::starknet::contract_address::ContractAddress'
      }
    ]
  },
  {
    kind: 'struct',
    name: 'grails::grails::Grails::ApprovalForAll',
    type: 'event',
    members: [
      {
        kind: 'key',
        name: 'owner',
        type: 'core::starknet::contract_address::ContractAddress'
      },
      {
        kind: 'key',
        name: 'operator',
        type: 'core::starknet::contract_address::ContractAddress'
      },
      {
        kind: 'data',
        name: 'approved',
        type: 'core::bool'
      }
    ]
  },
  {
    kind: 'struct',
    name: 'grails::grails::Grails::ERC20Approval',
    type: 'event',
    members: [
      {
        kind: 'key',
        name: 'owner',
        type: 'core::starknet::contract_address::ContractAddress'
      },
      {
        kind: 'key',
        name: 'spender',
        type: 'core::starknet::contract_address::ContractAddress'
      },
      {
        kind: 'data',
        name: 'amount',
        type: 'core::integer::u256'
      }
    ]
  },
  {
    kind: 'struct',
    name: 'grails::grails::Grails::ERC20Transfer',
    type: 'event',
    members: [
      {
        kind: 'key',
        name: 'from',
        type: 'core::starknet::contract_address::ContractAddress'
      },
      {
        kind: 'key',
        name: 'to',
        type: 'core::starknet::contract_address::ContractAddress'
      },
      {
        kind: 'data',
        name: 'amount',
        type: 'core::integer::u256'
      }
    ]
  },
  {
    kind: 'struct',
    name: 'grails::grails::Grails::ERC721Approval',
    type: 'event',
    members: [
      {
        kind: 'key',
        name: 'owner',
        type: 'core::starknet::contract_address::ContractAddress'
      },
      {
        kind: 'key',
        name: 'spender',
        type: 'core::starknet::contract_address::ContractAddress'
      },
      {
        kind: 'data',
        name: 'id',
        type: 'core::integer::u256'
      }
    ]
  },
  {
    kind: 'struct',
    name: 'grails::grails::Grails::ERC721Transfer',
    type: 'event',
    members: [
      {
        kind: 'key',
        name: 'from',
        type: 'core::starknet::contract_address::ContractAddress'
      },
      {
        kind: 'key',
        name: 'to',
        type: 'core::starknet::contract_address::ContractAddress'
      },
      {
        kind: 'data',
        name: 'id',
        type: 'core::integer::u256'
      }
    ]
  },
  {
    kind: 'struct',
    name: 'openzeppelin::access::ownable::ownable::OwnableComponent::OwnershipTransferred',
    type: 'event',
    members: [
      {
        kind: 'key',
        name: 'previous_owner',
        type: 'core::starknet::contract_address::ContractAddress'
      },
      {
        kind: 'key',
        name: 'new_owner',
        type: 'core::starknet::contract_address::ContractAddress'
      }
    ]
  },
  {
    kind: 'struct',
    name: 'openzeppelin::access::ownable::ownable::OwnableComponent::OwnershipTransferStarted',
    type: 'event',
    members: [
      {
        kind: 'key',
        name: 'previous_owner',
        type: 'core::starknet::contract_address::ContractAddress'
      },
      {
        kind: 'key',
        name: 'new_owner',
        type: 'core::starknet::contract_address::ContractAddress'
      }
    ]
  },
  {
    kind: 'enum',
    name: 'openzeppelin::access::ownable::ownable::OwnableComponent::Event',
    type: 'event',
    variants: [
      {
        kind: 'nested',
        name: 'OwnershipTransferred',
        type: 'openzeppelin::access::ownable::ownable::OwnableComponent::OwnershipTransferred'
      },
      {
        kind: 'nested',
        name: 'OwnershipTransferStarted',
        type: 'openzeppelin::access::ownable::ownable::OwnableComponent::OwnershipTransferStarted'
      }
    ]
  },
  {
    kind: 'struct',
    name: 'openzeppelin::upgrades::upgradeable::UpgradeableComponent::Upgraded',
    type: 'event',
    members: [
      {
        kind: 'data',
        name: 'class_hash',
        type: 'core::starknet::class_hash::ClassHash'
      }
    ]
  },
  {
    kind: 'enum',
    name: 'openzeppelin::upgrades::upgradeable::UpgradeableComponent::Event',
    type: 'event',
    variants: [
      {
        kind: 'nested',
        name: 'Upgraded',
        type: 'openzeppelin::upgrades::upgradeable::UpgradeableComponent::Upgraded'
      }
    ]
  },
  {
    kind: 'enum',
    name: 'grails::grails::Grails::Event',
    type: 'event',
    variants: [
      {
        kind: 'nested',
        name: 'ApprovalForAll',
        type: 'grails::grails::Grails::ApprovalForAll'
      },
      {
        kind: 'nested',
        name: 'ERC20Approval',
        type: 'grails::grails::Grails::ERC20Approval'
      },
      {
        kind: 'nested',
        name: 'ERC20Transfer',
        type: 'grails::grails::Grails::ERC20Transfer'
      },
      {
        kind: 'nested',
        name: 'ERC721Approval',
        type: 'grails::grails::Grails::ERC721Approval'
      },
      {
        kind: 'nested',
        name: 'ERC721Transfer',
        type: 'grails::grails::Grails::ERC721Transfer'
      },
      {
        kind: 'flat',
        name: 'OwnableEvent',
        type: 'openzeppelin::access::ownable::ownable::OwnableComponent::Event'
      },
      {
        kind: 'flat',
        name: 'UpgradeableEvent',
        type: 'openzeppelin::upgrades::upgradeable::UpgradeableComponent::Event'
      }
    ]
  }
]
