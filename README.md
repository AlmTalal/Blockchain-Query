# Blockchain-Query

Nouns.js{

1-Get all nouns delegated to an address for a given  block

2-Search all the Nouns NFTs associated with a specific wallet address that has acquired or holds these NFTs at a given block on the blockchain. This address would have either directly purchased the NFTs or received them through other means, such as transfers or gifts.
In the context of the Nouns DAO, the wallet address holding these NFTs would have voting rights proportional to the number of Nouns NFTs it holds. The question aims to determine the Nouns NFTs held by an address at a specific point in time to understand the voting power and influence the address has within the Nouns DAO
 

-I found the way to resolve only the first problem, by getting all the transfer logs, then filtering them by blockNumber first and then by the target address, so my code just logs which nouns had an address aquired at a specific block

-For the other two problems i could find the event that would have helped me to find how much voting power had a given address at a given block, but i couldn't find the code of that event (DelegateVotesChanged) and where it's called, so i was able to use it thanks to the abi of the contract but not to analyze it. That event logs (address delegate, uint256 previousBalance, uint256 newBalance) and I suppose that previousBalance and newBalance reffers to the previews and new voting rights tht the delegate have. I can use it, but i don't think that is the goal of the excersise.
}
