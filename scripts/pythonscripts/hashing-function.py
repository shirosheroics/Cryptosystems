# creating an empty hash table from 5  items
hash_table = [[] for _ in range(5)]
print(hash_table)


# insterting keys and values to it
def insert(hash_table, key, value):
    hash_key = hash(key) % len(hash_table)
    key_exists = False

    bucket = hash_table[hash_key]
    for i, kv in enumerate(bucket):
        k, v = kv
        if key == k:
            key_exists = True
            break
    if key_exists:
        bucket[i] = ((key, value))
    else:
        bucket.append((key, value))


# insterting data input
count = 0
while (count < 5):
    newK = input("Please enter a key number: ")
    newV = input("Please enter a Value for the key of type string: ")
    insert(hash_table, newK, newV)
    count = count + 1
    print(hash_table)


def search(hash_table, key):
    hash_key = hash(key) % len(hash_table)
    bucket = hash_table[hash_key]
    for i, kv in enumerate(bucket):
        k, v = kv
        if key == k:
            return v


# input to search for a valur from key
new_search = input("Enter a key to search for a value: ")
print (search(hash_table, new_search))


def delete(hash_table, key):
    hash_key = hash(key) % len(hash_table)
    key_exists = False
    bucket = hash_table[hash_key]
    for i, kv in enumerate(bucket):
        k, v = kv
        if key == k:
            key_exists = True
            break
    if key_exists:
        del bucket[i]
        print ('Key {} deleted'.format(key))
    else:
        print ('Key {} not found'.format(key))


# input for deletion
val_delete = input("Enenter a key to delete: ")
delete(hash_table, val_delete)
print(hash_table)
