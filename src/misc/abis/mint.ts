export const mint = [
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
    name: 'Mint',
    type: 'impl',
    interface_name: 'grails::mint::IMint'
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
    name: 'grails::mint::IMint',
    type: 'interface',
    items: [
      {
        name: 'allocation',
        type: 'function',
        inputs: [
          {
            name: 'owner',
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
        name: 'collect',
        type: 'function',
        inputs: [],
        outputs: [],
        state_mutability: 'external'
      },
      {
        name: 'mint',
        type: 'function',
        inputs: [
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
        name: 'unitPrice',
        type: 'function',
        inputs: [],
        outputs: [
          {
            type: 'core::integer::u256'
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
        name: 'grails',
        type: 'core::starknet::contract_address::ContractAddress'
      },
      {
        name: 'owner',
        type: 'core::starknet::contract_address::ContractAddress'
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
    name: 'grails::mint::Mint::Event',
    type: 'event',
    variants: [
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
