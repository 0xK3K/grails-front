export const vault = [
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
    name: 'Vault',
    type: 'impl',
    interface_name: 'grails::vault::IVault'
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
    name: 'grails::vault::IVault',
    type: 'interface',
    items: [
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
        name: 'retrieve',
        type: 'function',
        inputs: [
          {
            name: 'id',
            type: 'core::integer::u256'
          }
        ],
        outputs: [],
        state_mutability: 'external'
      },
      {
        name: 'store',
        type: 'function',
        inputs: [
          {
            name: 'id',
            type: 'core::integer::u256'
          }
        ],
        outputs: [],
        state_mutability: 'external'
      },
      {
        name: 'stored',
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
    name: 'grails::vault::Vault::Retrieve',
    type: 'event',
    members: [
      {
        kind: 'key',
        name: 'owner',
        type: 'core::starknet::contract_address::ContractAddress'
      },
      {
        kind: 'key',
        name: 'id',
        type: 'core::integer::u256'
      }
    ]
  },
  {
    kind: 'struct',
    name: 'grails::vault::Vault::Store',
    type: 'event',
    members: [
      {
        kind: 'key',
        name: 'owner',
        type: 'core::starknet::contract_address::ContractAddress'
      },
      {
        kind: 'key',
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
    name: 'grails::vault::Vault::Event',
    type: 'event',
    variants: [
      {
        kind: 'nested',
        name: 'Retrieve',
        type: 'grails::vault::Vault::Retrieve'
      },
      {
        kind: 'nested',
        name: 'Store',
        type: 'grails::vault::Vault::Store'
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
