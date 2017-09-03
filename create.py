import os
def createFile(name, number):
  i = 1
  while (number >= i) : 
    s = "%02d" % i
    dirName = name + '-' + s + '\\'
    driName = os.getcwd()[:-4] + dirName
    if os.path.exists(dirName) :
      i = i + 1
      continue
    os.makedirs(dirName)
    fileName = dirName + name + '-' + s +'.js'
    f = open(fileName, 'w')
    f.close
    i = i + 1
  print('ok')
createFile('exercise', 5)