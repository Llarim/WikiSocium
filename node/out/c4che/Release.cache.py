AR = '/usr/bin/ar'
ARFLAGS = 'rcs'
CC = ['/usr/bin/gcc']
CCDEFINES_ST = '-D%s'
CCFLAGS = ['-rdynamic', '-pthread', '-m32', '-g', '-O3']
CCFLAGS_DEBUG = ['-g']
CCFLAGS_MACBUNDLE = ['-fPIC']
CCFLAGS_RELEASE = ['-O2']
CCLNK_SRC_F = ''
CCLNK_TGT_F = ['-o', '']
CC_NAME = 'gcc'
CC_SRC_F = ''
CC_TGT_F = ['-c', '-o', '']
CC_VERSION = ('4', '6', '1')
COMPILER_CC = 'gcc'
COMPILER_CXX = 'g++'
CPP = '/usr/bin/cpp'
CPPFLAGS = ['-DHAVE_OPENSSL=1', '-D_LARGEFILE_SOURCE', '-D_FILE_OFFSET_BITS=64', '-DHAVE_FDATASYNC=1', '-DARCH="ia32"', '-DPLATFORM="linux"', '-D__POSIX__=1', '-Wno-unused-parameter', '-D_FORTIFY_SOURCE=2']
CPPPATH_ST = '-I%s'
CXX = ['/usr/bin/g++']
CXXDEFINES_ST = '-D%s'
CXXFLAGS = ['-pthread', '-m32', '-g', '-O3']
CXXFLAGS_DEBUG = ['-g']
CXXFLAGS_RELEASE = ['-O2']
CXXLNK_SRC_F = ''
CXXLNK_TGT_F = ['-o', '']
CXX_NAME = 'gcc'
CXX_SRC_F = ''
CXX_TGT_F = ['-c', '-o', '']
DEST_BINFMT = 'elf'
DEST_CPU = 'ia32'
DEST_OS = 'linux'
FULLSTATIC_MARKER = '-static'
HAVE_CONFIG_H = 1
HAVE_OPENSSL = 1
LIBDIR = '/usr/local/lib'
LIBPATH_ST = '-L%s'
LIBPATH_UTIL = ['/usr/lib', '/usr/local/lib']
LIB_DL = ['dl']
LIB_OPENSSL = ['ssl', 'crypto']
LIB_RT = ['rt']
LIB_ST = '-l%s'
LIB_UTIL = ['util']
LINKFLAGS = ['-lz', '-pthread', '-m32']
LINKFLAGS_DL = ['-rdynamic']
LINKFLAGS_MACBUNDLE = ['-bundle', '-undefined', 'dynamic_lookup']
LINK_CC = ['/usr/bin/gcc']
LINK_CXX = ['/usr/bin/g++']
PLATFORM_FILE = 'src/platform_linux.cc'
PREFIX = '/usr/local'
RANLIB = '/usr/bin/ranlib'
RPATH_ST = '-Wl,-rpath,%s'
SHLIB_MARKER = '-Wl,-Bdynamic'
SNAPSHOT_V8 = True
SONAME_ST = '-Wl,-h,%s'
STATICLIBPATH_ST = '-L%s'
STATICLIB_MARKER = '-Wl,-Bstatic'
STATICLIB_ST = '-l%s'
USE_DEBUG = False
USE_GDBJIT = False
USE_OPENSSL = True
USE_PROFILING = False
USE_SHARED_CARES = False
USE_SHARED_V8 = False
USE_SHARED_ZLIB = False
cfg_files = ['config.h']
defines = {'HAVE_OPENSSL': 1, 'HAVE_CONFIG_H': 1}
macbundle_PATTERN = '%s.bundle'
program_PATTERN = '%s'
shlib_CCFLAGS = ['-fPIC', '-DPIC']
shlib_CXXFLAGS = ['-fPIC', '-DPIC']
shlib_LINKFLAGS = ['-shared']
shlib_PATTERN = 'lib%s.so'
staticlib_LINKFLAGS = ['-Wl,-Bstatic']
staticlib_PATTERN = 'lib%s.a'
