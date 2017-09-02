# !/usr/bin/python3
import os, shutil
def createFile(name, number):
  i = 1
  while (number >= i) : 
    s = "%02d" % i
    dirName = name + '-' + s
    if os.path.exists(dirName) :
      i = i + 1
      continue
    fileName = name + '-' + s +'.js'
    os.makedirs(dirName)
    # f = open(fileName, 'w')
    # f.close
    dirName = '\\' + dirName
    # shutil.move(fileName, os.getcwd() + dirName)
    print(i)
    i = i + 1
  print('ok')
  print(number)
createFile('exercise', 15)

