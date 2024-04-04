import threading
import urllib2
import time

start = time.time()
urls = ["https://www.google.com", "https://www.apple.com", "https://www.microsoft.com", "https://www.instagram.com"]


def chamaUrl(url):
    req = urllib2.urlopen(url)
    response = urllib2.urlopen(req)
    page = response.read()
    print
    "'%s\' carregando em %ss" % (url, (time.time() - start))
    # print(page)


threads = [threading.Thread(target=chamaUrl, args=(url,)) for url in urls]

for thread in threads:
    thread.start()
for thread in threads:
    thread.join()

print("Elapsed time: %s" % (time.time() - start))
