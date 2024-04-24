unicode_offset = ord('a')

def encrypt(input:str, key:str):
    input = list(input.casefold())
    key = list(key.casefold())
    key_len = len(key)
    ans = ""
    
    for i in range(len(input)):
        # print(i, input[i], key[i%key_len]) 
        ans += chr((ord(input[i]) + ord(key[i%key_len]) - (unicode_offset * 2))%26 + unicode_offset)
        
    return ans

def decrypt(input:str, key:str):
    input = list(input.casefold())
    key = list(key.casefold())
    key_len = len(key)
    ans = ""
    
    for i in range(len(input)):
        if(input[i] == " "): 
            ans += " "
            continue
        ans += chr((ord(input[i]) - ord(key[i%key_len]))%26 + unicode_offset)
        
    return ans