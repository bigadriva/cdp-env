import os


def download_data():
    import ftplib

    ftp = ftplib.FTP((os.getenv('FTP_HOST')), (os.getenv('FTP_USER')), (os.getenv('FTP_PASSWORD')))
    ftp.cwd("/")
    filematch = '*.TXT'
    target_dir = '/app/data'

    for filename in ftp.nlst(filematch):
        target_file_name = os.path.join(target_dir, os.path.basename(filename))
        with open(target_file_name, 'wb') as fhandle:
            ftp.retrbinary('RETR %s' % filename, fhandle.write)
