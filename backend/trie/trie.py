"""
Leetcode: 208. Implement Trie (Prefix Tree)
https://leetcode.com/problems/implement-trie-prefix-tree/
"""

from collections import defaultdict

class TrieNode:
    def __init__(self):
        self.children = defaultdict(TrieNode)
        self.end = False
    
class Trie:
    def __init__(self):
        self.root = TrieNode()
    
    def insert(self, word: str):
        curr = self.root
        for ch in word:
            curr = curr.children[ch]
        curr.end = True
    
    def search(self, word):
        curr = self.root
        for ch in word:
            if ch not in curr.children:
                return False
            curr = curr.children[ch]
        return curr.end
    
    def startsWith(self, word):
        curr = self.root
        for ch in word:
            if ch not in curr.children:
                return False
            curr = curr.children[ch]
        return True